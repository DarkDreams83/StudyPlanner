(() => {
  "use strict";

  const ACCOUNTS_KEY = "sp-auth-accounts-v1";
  const ACTIVE_ACCOUNT_KEY = "sp-auth-active-v1";
  const TASKS_KEY = "sp-tasks";
  const PASSWORD_ITERATIONS = 310000;
  const browserStorage = window.localStorage;
  const authRoot = document.getElementById("auth-root");
  const appRoot = document.getElementById("root");
  let accountForStorage = null;
  let appStarted = false;
  let accounts = [];

  function readAccounts() {
    const saved = browserStorage.getItem(ACCOUNTS_KEY);
    if (saved === null) return [];

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      throw new Error("Saved account data is invalid. It has not been changed.");
    }

    for (const account of parsed) {
      if (
        !account ||
        typeof account.id !== "string" ||
        typeof account.name !== "string" ||
        typeof account.email !== "string" ||
        typeof account.salt !== "string" ||
        typeof account.passwordHash !== "string"
      ) {
        throw new Error("Saved account data is invalid. It has not been changed.");
      }
    }

    return parsed;
  }

  function installAccountStorage(account) {
    accountForStorage = account;
    const nativeStorage = browserStorage;
    const scopedStorage = new Proxy(nativeStorage, {
      get(target, property) {
        if (property === "getItem") {
          return (key) =>
            target.getItem(
              accountForStorage && String(key) === TASKS_KEY
                ? `sp-account:${accountForStorage.id}:${TASKS_KEY}`
                : String(key),
            );
        }
        if (property === "setItem") {
          return (key, value) =>
            target.setItem(
              accountForStorage && String(key) === TASKS_KEY
                ? `sp-account:${accountForStorage.id}:${TASKS_KEY}`
                : String(key),
              String(value),
            );
        }
        const value = Reflect.get(target, property, target);
        return typeof value === "function" ? value.bind(target) : value;
      },
    });

    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: scopedStorage,
    });
  }

  function addAppScript() {
    const script = document.createElement("script");
    const isViteDevServer =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    const isFilePreview = window.location.protocol === "file:";
    script.type = isViteDevServer || !isFilePreview ? "module" : "text/javascript";
    script.src = isViteDevServer ? "/src/main.jsx" : "js/app.js";
    if (!isViteDevServer && !document.querySelector('link[data-planner-styles]')) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "js/app.css";
      stylesheet.dataset.plannerStyles = "true";
      document.head.appendChild(stylesheet);
    }
    script.onerror = () => {
      appStarted = false;
      showAuth("The planner could not be loaded. Refresh the page to try again.");
    };
    document.body.appendChild(script);
  }

  function renderAccountBar(account) {
    const bar = document.createElement("div");
    bar.className = "auth-account-bar";
    const label = document.createElement("span");
    label.textContent = account ? `Signed in as ${account.name}` : "Using StudySprout as a guest";

    const actions = document.createElement("div");
    actions.className = "auth-account-actions";
    if (account) {
      const signOut = document.createElement("button");
      signOut.type = "button";
      signOut.textContent = "Sign out";
      signOut.addEventListener("click", () => {
        window.localStorage.removeItem(ACTIVE_ACCOUNT_KEY);
        window.location.reload();
      });
      actions.appendChild(signOut);
    } else {
      const signIn = document.createElement("button");
      signIn.type = "button";
      signIn.textContent = "Sign in / Sign up";
      signIn.addEventListener("click", () => showAuth(""));
      actions.appendChild(signIn);
    }

    bar.append(label, actions);
    document.body.insertBefore(bar, appRoot);
  }

  function startApp(account) {
    installAccountStorage(account);
    authRoot.replaceChildren();
    appRoot.hidden = false;
    renderAccountBar(account);
    if (!appStarted) {
      appStarted = true;
      addAppScript();
    }
  }

  function setError(message) {
    const error = authRoot.querySelector("[data-auth-error]");
    if (error) error.textContent = message;
  }

  function showAuth(initialError) {
    appRoot.hidden = true;
    document.querySelector(".auth-account-bar")?.remove();
    authRoot.innerHTML = `
      <main class="auth-page">
        <section class="auth-card" aria-labelledby="auth-title">
          <p class="auth-brand">StudySprout</p>
          <h1 id="auth-title">Your study space</h1>
          <p class="auth-intro">Sign in to keep your study tasks in your own account, or create a new account to get started.</p>
          <div class="auth-tabs" role="tablist" aria-label="Account options">
            <button type="button" data-mode="signin" role="tab">Sign in</button>
            <button type="button" data-mode="signup" role="tab">Create account</button>
          </div>
          <form class="auth-form" novalidate>
            <label data-name-field hidden>
              Name
              <input name="name" type="text" autocomplete="name" maxlength="60" />
            </label>
            <label>
              Email
              <input name="email" type="email" autocomplete="email" maxlength="254" required />
            </label>
            <label>
              Password
              <input name="password" type="password" autocomplete="current-password" minlength="8" maxlength="128" required />
            </label>
            <label data-confirm-field hidden>
              Confirm password
              <input name="confirmPassword" type="password" autocomplete="new-password" minlength="8" maxlength="128" />
            </label>
            <button class="auth-submit" type="submit">Sign in</button>
          </form>
          <p class="auth-error" data-auth-error role="status" aria-live="polite"></p>
          <div class="auth-divider">or</div>
          <button class="auth-guest" type="button">Continue as guest</button>
          <p class="auth-footnote">Accounts and planner data are saved only in this browser on this device. This static site does not sync accounts online.</p>
        </section>
      </main>`;

    const form = authRoot.querySelector("form");
    const tabs = [...authRoot.querySelectorAll("[data-mode]")];
    const nameField = authRoot.querySelector("[data-name-field]");
    const confirmField = authRoot.querySelector("[data-confirm-field]");
    const submit = authRoot.querySelector(".auth-submit");
    const emailInput = form.elements.namedItem("email");
    const passwordInput = form.elements.namedItem("password");
    const nameInput = form.elements.namedItem("name");
    const confirmInput = form.elements.namedItem("confirmPassword");
    let mode = accounts.length ? "signin" : "signup";

    function setMode(nextMode) {
      mode = nextMode;
      const signingUp = mode === "signup";
      nameField.hidden = !signingUp;
      confirmField.hidden = !signingUp;
      nameInput.required = signingUp;
      confirmInput.required = signingUp;
      passwordInput.autocomplete = signingUp ? "new-password" : "current-password";
      submit.textContent = signingUp ? "Create account" : "Sign in";
      tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", String(tab.dataset.mode === mode));
      });
      setError("");
    }

    tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));
    authRoot.querySelector(".auth-guest").addEventListener("click", () => startApp(null));

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      setError("");
      if (!form.reportValidity()) return;

      const email = emailInput.value.trim().toLowerCase();
      const password = passwordInput.value;
      submit.disabled = true;

      try {
        accounts = readAccounts();
        if (mode === "signup") {
          const name = nameInput.value.trim();
          if (!name) throw new Error("Enter your name.");
          if (password.length < 8) throw new Error("Use a password with at least 8 characters.");
          if (password !== confirmInput.value) throw new Error("The passwords do not match.");
          if (accounts.some((account) => account.email === email)) {
            throw new Error("An account with that email already exists. Sign in instead.");
          }
          if (!window.crypto?.subtle) {
            throw new Error("Secure password hashing is unavailable. Open the site over HTTPS or localhost.");
          }

          const salt = window.crypto.getRandomValues(new Uint8Array(16));
          const passwordHash = await hashPassword(password, salt);
          const account = {
            id: window.crypto.randomUUID(),
            name,
            email,
            salt: toBase64(salt),
            passwordHash: toBase64(passwordHash),
          };
          accounts.push(account);
          browserStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
          browserStorage.setItem(ACTIVE_ACCOUNT_KEY, account.id);
          if (appStarted) {
            window.location.reload();
            return;
          }
          startApp(account);
        } else {
          const account = accounts.find((item) => item.email === email);
          if (!account || !(await verifyPassword(password, account))) {
            throw new Error("Email or password is incorrect.");
          }
          browserStorage.setItem(ACTIVE_ACCOUNT_KEY, account.id);
          if (appStarted) {
            window.location.reload();
            return;
          }
          startApp(account);
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Your account could not be saved. Check browser storage and try again.",
        );
        submit.disabled = false;
      }
    });

    setMode(mode);
    if (initialError) setError(initialError);
  }

  function toBase64(bytes) {
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return window.btoa(binary);
  }

  function fromBase64(value) {
    return Uint8Array.from(window.atob(value), (character) => character.charCodeAt(0));
  }

  async function hashPassword(password, salt) {
    const key = await window.crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveBits"],
    );
    const bits = await window.crypto.subtle.deriveBits(
      { name: "PBKDF2", hash: "SHA-256", salt, iterations: PASSWORD_ITERATIONS },
      key,
      256,
    );
    return new Uint8Array(bits);
  }

  async function verifyPassword(password, account) {
    if (!window.crypto?.subtle) {
      throw new Error("Secure password verification is unavailable. Open the site over HTTPS or localhost.");
    }
    const actual = await hashPassword(password, fromBase64(account.salt));
    const expected = fromBase64(account.passwordHash);
    if (actual.length !== expected.length) return false;
    let difference = 0;
    for (let index = 0; index < actual.length; index += 1) {
      difference |= actual[index] ^ expected[index];
    }
    return difference === 0;
  }

  try {
    accounts = readAccounts();
    const activeId = browserStorage.getItem(ACTIVE_ACCOUNT_KEY);
    const activeAccount = activeId
      ? accounts.find((account) => account.id === activeId)
      : null;

    if (activeId && !activeAccount) {
      throw new Error("The saved sign-in no longer matches an account. Sign in again.");
    }

    if (activeAccount) {
      startApp(activeAccount);
    } else {
      showAuth("");
    }
  } catch (error) {
    accounts = [];
    showAuth(
      error instanceof Error
        ? error.message
        : "Account data could not be read. It has not been changed.",
    );
  }
})();
