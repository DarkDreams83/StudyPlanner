function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zu = { exports: {} }, rl = {}, Ju = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn = Symbol.for("react.element"), hc = Symbol.for("react.portal"), vc = Symbol.for("react.fragment"), yc = Symbol.for("react.strict_mode"), gc = Symbol.for("react.profiler"), wc = Symbol.for("react.provider"), Sc = Symbol.for("react.context"), kc = Symbol.for("react.forward_ref"), xc = Symbol.for("react.suspense"), Ec = Symbol.for("react.memo"), Nc = Symbol.for("react.lazy"), Ai = Symbol.iterator;
function jc(e) {
  return e === null || typeof e != "object" ? null : (e = Ai && e[Ai] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bu = Object.assign, es = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = es, this.updater = n || qu;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ts() {
}
ts.prototype = un.prototype;
function Ho(e, t, n) {
  this.props = e, this.context = t, this.refs = es, this.updater = n || qu;
}
var Wo = Ho.prototype = new ts();
Wo.constructor = Ho;
bu(Wo, un.prototype);
Wo.isPureReactComponent = !0;
var Vi = Array.isArray, ns = Object.prototype.hasOwnProperty, Qo = { current: null }, rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ns.call(t, r) && !rs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Xn, type: e, key: o, ref: i, props: l, _owner: Qo.current };
}
function Cc(e, t) {
  return { $$typeof: Xn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function _c(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Bi = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _c("" + e.key) : t.toString(36);
}
function Sr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Xn:
        case hc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + xl(i, 0) : r, Vi(l) ? (n = "", e != null && (n = e.replace(Bi, "$&/") + "/"), Sr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Ko(l) && (l = Cc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Vi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + xl(o, u);
    i += Sr(o, t, n, s, l);
  }
  else if (s = jc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + xl(o, u++), i += Sr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Tc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null }, kr = { transition: null }, Pc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: kr, ReactCurrentOwner: Qo };
function os() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: tr, forEach: function(e, t, n) {
  tr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return tr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return tr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ko(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = un;
L.Fragment = vc;
L.Profiler = gc;
L.PureComponent = Ho;
L.StrictMode = yc;
L.Suspense = xc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pc;
L.act = os;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Qo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ns.call(t, s) && !rs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Sc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: wc, _context: e }, e.Consumer = e;
};
L.createElement = ls;
L.createFactory = function(e) {
  var t = ls.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: kc, render: e };
};
L.isValidElement = Ko;
L.lazy = function(e) {
  return { $$typeof: Nc, _payload: { _status: -1, _result: e }, _init: Tc };
};
L.memo = function(e, t) {
  return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
L.unstable_act = os;
L.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
L.useContext = function(e) {
  return ce.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
L.useId = function() {
  return ce.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return ce.current.useRef(e);
};
L.useState = function(e) {
  return ce.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return ce.current.useTransition();
};
L.version = "18.3.1";
Ju.exports = L;
var G = Ju.exports;
const zc = /* @__PURE__ */ mc(G);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = G, Rc = Symbol.for("react.element"), Dc = Symbol.for("react.fragment"), Oc = Object.prototype.hasOwnProperty, Mc = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Oc.call(t, r) && !Fc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Rc, type: e, key: o, ref: i, props: l, _owner: Mc.current };
}
rl.Fragment = Dc;
rl.jsx = is;
rl.jsxs = is;
Zu.exports = rl;
var c = Zu.exports, us = { exports: {} }, ke = {}, ss = { exports: {} }, as = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(j, P) {
    var z = j.length;
    j.push(P);
    e: for (; 0 < z; ) {
      var Q = z - 1 >>> 1, q = j[Q];
      if (0 < l(q, P)) j[Q] = P, j[z] = q, z = Q;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var P = j[0], z = j.pop();
    if (z !== P) {
      j[0] = z;
      e: for (var Q = 0, q = j.length, bn = q >>> 1; Q < bn; ) {
        var gt = 2 * (Q + 1) - 1, kl = j[gt], wt = gt + 1, er = j[wt];
        if (0 > l(kl, z)) wt < q && 0 > l(er, kl) ? (j[Q] = er, j[wt] = z, Q = wt) : (j[Q] = kl, j[gt] = z, Q = gt);
        else if (wt < q && 0 > l(er, z)) j[Q] = er, j[wt] = z, Q = wt;
        else break e;
      }
    }
    return P;
  }
  function l(j, P) {
    var z = j.sortIndex - P.sortIndex;
    return z !== 0 ? z : j.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], f = [], v = 1, h = null, m = 3, w = !1, S = !1, x = !1, M = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= j) r(f), P.sortIndex = P.expirationTime, t(s, P);
      else break;
      P = n(f);
    }
  }
  function y(j) {
    if (x = !1, p(j), !S) if (n(s) !== null) S = !0, wl(E);
    else {
      var P = n(f);
      P !== null && Sl(y, P.startTime - j);
    }
  }
  function E(j, P) {
    S = !1, x && (x = !1, d(T), T = -1), w = !0;
    var z = m;
    try {
      for (p(P), h = n(s); h !== null && (!(h.expirationTime > P) || j && !R()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, m = h.priorityLevel;
          var q = Q(h.expirationTime <= P);
          P = e.unstable_now(), typeof q == "function" ? h.callback = q : h === n(s) && r(s), p(P);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var bn = !0;
      else {
        var gt = n(f);
        gt !== null && Sl(y, gt.startTime - P), bn = !1;
      }
      return bn;
    } finally {
      h = null, m = z, w = !1;
    }
  }
  var C = !1, _ = null, T = -1, A = 5, k = -1;
  function R() {
    return !(e.unstable_now() - k < A);
  }
  function Y() {
    if (_ !== null) {
      var j = e.unstable_now();
      k = j;
      var P = !0;
      try {
        P = _(!0, j);
      } finally {
        P ? Pe() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var Pe;
  if (typeof a == "function") Pe = function() {
    a(Y);
  };
  else if (typeof MessageChannel < "u") {
    var $i = new MessageChannel(), pc = $i.port2;
    $i.port1.onmessage = Y, Pe = function() {
      pc.postMessage(null);
    };
  } else Pe = function() {
    M(Y, 0);
  };
  function wl(j) {
    _ = j, C || (C = !0, Pe());
  }
  function Sl(j, P) {
    T = M(function() {
      j(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    S || w || (S = !0, wl(E));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(j) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = m;
    }
    var z = m;
    m = P;
    try {
      return j();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, P) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var z = m;
    m = j;
    try {
      return P();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(j, P, z) {
    var Q = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, j) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = z + q, j = { id: v++, callback: P, priorityLevel: j, startTime: z, expirationTime: q, sortIndex: -1 }, z > Q ? (j.sortIndex = z, t(f, j), n(s) === null && j === n(f) && (x ? (d(T), T = -1) : x = !0, Sl(y, z - Q))) : (j.sortIndex = q, t(s, j), S || w || (S = !0, wl(E))), j;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(j) {
    var P = m;
    return function() {
      var z = m;
      m = P;
      try {
        return j.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(as);
ss.exports = as;
var Ic = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = G, Se = Ic;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cs = /* @__PURE__ */ new Set(), Ln = {};
function Rt(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (Ln[e] = t, e = 0; e < t.length; e++) cs.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hi = {}, Wi = {};
function Ac(e) {
  return Gl.call(Wi, e) ? !0 : Gl.call(Hi, e) ? !1 : $c.test(e) ? Wi[e] = !0 : (Hi[e] = !0, !1);
}
function Vc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bc(e, t, n, r) {
  if (t === null || typeof t > "u" || Vc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yo = /[\-:]([a-z])/g;
function Xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yo,
    Xo
  );
  re[t] = new fe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yo, Xo);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yo, Xo);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bc(t, n, l, r) && (n = null), r || l === null ? Ac(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nr = Symbol.for("react.element"), Mt = Symbol.for("react.portal"), Ft = Symbol.for("react.fragment"), Zo = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), fs = Symbol.for("react.provider"), ds = Symbol.for("react.context"), Jo = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), qo = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), ps = Symbol.for("react.offscreen"), Qi = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object" ? null : (e = Qi && e[Qi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var H = Object.assign, El;
function gn(e) {
  if (El === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    El = t && t[1] || "";
  }
  return `
` + El + e;
}
var Nl = !1;
function jl(e, t) {
  if (!e || Nl) return "";
  Nl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Nl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gn(e) : "";
}
function Hc(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type);
    case 16:
      return gn("Lazy");
    case 13:
      return gn("Suspense");
    case 19:
      return gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = jl(e.type, !1), e;
    case 11:
      return e = jl(e.type.render, !1), e;
    case 1:
      return e = jl(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case Mt:
      return "Portal";
    case Zl:
      return "Profiler";
    case Zo:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ds:
      return (e.displayName || "Context") + ".Consumer";
    case fs:
      return (e._context.displayName || "Context") + ".Provider";
    case Jo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case qo:
      return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
    case be:
      t = e._payload, e = e._init;
      try {
        return bl(e(t));
      } catch {
      }
  }
  return null;
}
function Wc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(t);
    case 8:
      return t === Zo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ms(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qc(e) {
  var t = ms(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ms(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Dr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, t) {
  var n = t.checked;
  return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ki(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vs(e, t) {
  t = t.checked, t != null && Go(e, "checked", t, !1);
}
function to(e, t) {
  vs(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? no(e, t.type, n) : t.hasOwnProperty("defaultValue") && no(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Yi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function no(e, t, n) {
  (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Yt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ro(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(g(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pt(n) };
}
function ys(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Gi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var lr, ws = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (lr = lr || document.createElement("div"), lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = lr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function(e) {
  Kc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xn[t] = xn[e];
  });
});
function Ss(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xn.hasOwnProperty(e) && xn[e] ? ("" + t).trim() : t + "px";
}
function ks(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ss(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Yc = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function oo(e, t) {
  if (t) {
    if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function io(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uo = null;
function bo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var so = null, Xt = null, Gt = null;
function Zi(e) {
  if (e = Jn(e)) {
    if (typeof so != "function") throw Error(g(280));
    var t = e.stateNode;
    t && (t = sl(t), so(e.stateNode, e.type, t));
  }
}
function xs(e) {
  Xt ? Gt ? Gt.push(e) : Gt = [e] : Xt = e;
}
function Es() {
  if (Xt) {
    var e = Xt, t = Gt;
    if (Gt = Xt = null, Zi(e), t) for (e = 0; e < t.length; e++) Zi(t[e]);
  }
}
function Ns(e, t) {
  return e(t);
}
function js() {
}
var Cl = !1;
function Cs(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return Ns(e, t, n);
  } finally {
    Cl = !1, (Xt !== null || Gt !== null) && (js(), Es());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var ao = !1;
if (Ye) try {
  var fn = {};
  Object.defineProperty(fn, "passive", { get: function() {
    ao = !0;
  } }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
} catch {
  ao = !1;
}
function Xc(e, t, n, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var En = !1, Or = null, Mr = !1, co = null, Gc = { onError: function(e) {
  En = !0, Or = e;
} };
function Zc(e, t, n, r, l, o, i, u, s) {
  En = !1, Or = null, Xc.apply(Gc, arguments);
}
function Jc(e, t, n, r, l, o, i, u, s) {
  if (Zc.apply(this, arguments), En) {
    if (En) {
      var f = Or;
      En = !1, Or = null;
    } else throw Error(g(198));
    Mr || (Mr = !0, co = f);
  }
}
function Dt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _s(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ji(e) {
  if (Dt(e) !== e) throw Error(g(188));
}
function qc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dt(e), t === null) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ji(l), e;
        if (o === r) return Ji(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return e = qc(e), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = Se.unstable_scheduleCallback, qi = Se.unstable_cancelCallback, bc = Se.unstable_shouldYield, ef = Se.unstable_requestPaint, K = Se.unstable_now, tf = Se.unstable_getCurrentPriorityLevel, ei = Se.unstable_ImmediatePriority, Ls = Se.unstable_UserBlockingPriority, Fr = Se.unstable_NormalPriority, nf = Se.unstable_LowPriority, Rs = Se.unstable_IdlePriority, ll = null, Ae = null;
function rf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : uf, lf = Math.log, of = Math.LN2;
function uf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (lf(e) / of | 0) | 0;
}
var or = 64, ir = 4194304;
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Sn(u) : (o &= i, o !== 0 && (r = Sn(o)));
  } else i = n & ~l, i !== 0 ? r = Sn(i) : o !== 0 && (r = Sn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function sf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function af(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Oe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = sf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function fo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ds() {
  var e = or;
  return or <<= 1, !(or & 4194240) && (or = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function cf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ti(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Os(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ms, ni, Fs, Is, Us, po = !1, ur = [], ot = null, it = null, ut = null, On = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map(), tt = [], ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mn.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Jn(t), t !== null && ni(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function df(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ot = dn(ot, e, t, n, r, l), !0;
    case "dragenter":
      return it = dn(it, e, t, n, r, l), !0;
    case "mouseover":
      return ut = dn(ut, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return On.set(o, dn(On.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Mn.set(o, dn(Mn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function $s(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Dt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = _s(n), t !== null) {
          e.blockedOn = t, Us(e.priority, function() {
            Fs(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uo = r, n.target.dispatchEvent(r), uo = null;
    } else return t = Jn(n), t !== null && ni(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function eu(e, t, n) {
  xr(e) && n.delete(t);
}
function pf() {
  po = !1, ot !== null && xr(ot) && (ot = null), it !== null && xr(it) && (it = null), ut !== null && xr(ut) && (ut = null), On.forEach(eu), Mn.forEach(eu);
}
function pn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, po || (po = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, pf)));
}
function Fn(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < ur.length) {
    pn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ot !== null && pn(ot, e), it !== null && pn(it, e), ut !== null && pn(ut, e), On.forEach(t), Mn.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) $s(n), n.blockedOn === null && tt.shift();
}
var Zt = Je.ReactCurrentBatchConfig, Ur = !0;
function mf(e, t, n, r) {
  var l = O, o = Zt.transition;
  Zt.transition = null;
  try {
    O = 1, ri(e, t, n, r);
  } finally {
    O = l, Zt.transition = o;
  }
}
function hf(e, t, n, r) {
  var l = O, o = Zt.transition;
  Zt.transition = null;
  try {
    O = 4, ri(e, t, n, r);
  } finally {
    O = l, Zt.transition = o;
  }
}
function ri(e, t, n, r) {
  if (Ur) {
    var l = mo(e, t, n, r);
    if (l === null) Il(e, t, r, $r, n), bi(e, r);
    else if (df(l, e, t, n, r)) r.stopPropagation();
    else if (bi(e, r), t & 4 && -1 < ff.indexOf(e)) {
      for (; l !== null; ) {
        var o = Jn(l);
        if (o !== null && Ms(o), o = mo(e, t, n, r), o === null && Il(e, t, r, $r, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var $r = null;
function mo(e, t, n, r) {
  if ($r = null, e = bo(r), e = xt(e), e !== null) if (t = Dt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = _s(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $r = e, null;
}
function As(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tf()) {
        case ei:
          return 1;
        case Ls:
          return 4;
        case Fr:
        case nf:
          return 16;
        case Rs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, li = null, Er = null;
function Vs() {
  if (Er) return Er;
  var e, t = li, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Nr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sr() {
  return !0;
}
function tu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? sr : tu, this.isPropagationStopped = tu, this;
  }
  return H(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sr);
  }, persist: function() {
  }, isPersistent: sr }), t;
}
var sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, oi = xe(sn), Zn = H({}, sn, { view: 0, detail: 0 }), vf = xe(Zn), Tl, Pl, mn, ol = H({}, Zn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ii, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mn && (mn && e.type === "mousemove" ? (Tl = e.screenX - mn.screenX, Pl = e.screenY - mn.screenY) : Pl = Tl = 0, mn = e), Tl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Pl;
} }), nu = xe(ol), yf = H({}, ol, { dataTransfer: 0 }), gf = xe(yf), wf = H({}, Zn, { relatedTarget: 0 }), zl = xe(wf), Sf = H({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kf = xe(Sf), xf = H({}, sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ef = xe(xf), Nf = H({}, sn, { data: 0 }), ru = xe(Nf), jf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Cf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, _f = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _f[e]) ? !!t[e] : !1;
}
function ii() {
  return Tf;
}
var Pf = H({}, Zn, { key: function(e) {
  if (e.key) {
    var t = jf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Nr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ii, charCode: function(e) {
  return e.type === "keypress" ? Nr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zf = xe(Pf), Lf = H({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lu = xe(Lf), Rf = H({}, Zn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ii }), Df = xe(Rf), Of = H({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mf = xe(Of), Ff = H({}, ol, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), If = xe(Ff), Uf = [9, 13, 27, 32], ui = Ye && "CompositionEvent" in window, Nn = null;
Ye && "documentMode" in document && (Nn = document.documentMode);
var $f = Ye && "TextEvent" in window && !Nn, Bs = Ye && (!ui || Nn && 8 < Nn && 11 >= Nn), ou = " ", iu = !1;
function Hs(e, t) {
  switch (e) {
    case "keyup":
      return Uf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ws(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Af(e, t) {
  switch (e) {
    case "compositionend":
      return Ws(t);
    case "keypress":
      return t.which !== 32 ? null : (iu = !0, ou);
    case "textInput":
      return e = t.data, e === ou && iu ? null : e;
    default:
      return null;
  }
}
function Vf(e, t) {
  if (It) return e === "compositionend" || !ui && Hs(e, t) ? (e = Vs(), Er = li = rt = null, It = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bf[e.type] : t === "textarea";
}
function Qs(e, t, n, r) {
  xs(r), t = Ar(t, "onChange"), 0 < t.length && (n = new oi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var jn = null, In = null;
function Hf(e) {
  na(e, 0);
}
function il(e) {
  var t = At(e);
  if (hs(t)) return e;
}
function Wf(e, t) {
  if (e === "change") return t;
}
var Ks = !1;
if (Ye) {
  var Ll;
  if (Ye) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var su = document.createElement("div");
      su.setAttribute("oninput", "return;"), Rl = typeof su.oninput == "function";
    }
    Ll = Rl;
  } else Ll = !1;
  Ks = Ll && (!document.documentMode || 9 < document.documentMode);
}
function au() {
  jn && (jn.detachEvent("onpropertychange", Ys), In = jn = null);
}
function Ys(e) {
  if (e.propertyName === "value" && il(In)) {
    var t = [];
    Qs(t, In, e, bo(e)), Cs(Hf, t);
  }
}
function Qf(e, t, n) {
  e === "focusin" ? (au(), jn = t, In = n, jn.attachEvent("onpropertychange", Ys)) : e === "focusout" && au();
}
function Kf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return il(In);
}
function Yf(e, t) {
  if (e === "click") return il(t);
}
function Xf(e, t) {
  if (e === "input" || e === "change") return il(t);
}
function Gf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Gf;
function Un(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fu(e, t) {
  var n = cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cu(n);
  }
}
function Xs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gs() {
  for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dr(e.document);
  }
  return t;
}
function si(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Zf(e) {
  var t = Gs(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
    if (r !== null && si(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = fu(n, o);
        var i = fu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Jf = Ye && "documentMode" in document && 11 >= document.documentMode, Ut = null, ho = null, Cn = null, vo = !1;
function du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vo || Ut == null || Ut !== Dr(r) || (r = Ut, "selectionStart" in r && si(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Cn && Un(Cn, r) || (Cn = r, r = Ar(ho, "onSelect"), 0 < r.length && (t = new oi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ut)));
}
function ar(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $t = { animationend: ar("Animation", "AnimationEnd"), animationiteration: ar("Animation", "AnimationIteration"), animationstart: ar("Animation", "AnimationStart"), transitionend: ar("Transition", "TransitionEnd") }, Dl = {}, Zs = {};
Ye && (Zs = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
function ul(e) {
  if (Dl[e]) return Dl[e];
  if (!$t[e]) return e;
  var t = $t[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zs) return Dl[e] = t[n];
  return e;
}
var Js = ul("animationend"), qs = ul("animationiteration"), bs = ul("animationstart"), ea = ul("transitionend"), ta = /* @__PURE__ */ new Map(), pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  ta.set(e, t), Rt(t, [e]);
}
for (var Ol = 0; Ol < pu.length; Ol++) {
  var Ml = pu[Ol], qf = Ml.toLowerCase(), bf = Ml[0].toUpperCase() + Ml.slice(1);
  ht(qf, "on" + bf);
}
ht(Js, "onAnimationEnd");
ht(qs, "onAnimationIteration");
ht(bs, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ea, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function mu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Jc(r, t, void 0, e), e.currentTarget = null;
}
function na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        mu(l, u, f), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, f = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        mu(l, u, f), o = s;
      }
    }
  }
  if (Mr) throw e = co, Mr = !1, co = null, e;
}
function I(e, t) {
  var n = t[ko];
  n === void 0 && (n = t[ko] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ra(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), ra(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[cr]) {
    e[cr] = !0, cs.forEach(function(n) {
      n !== "selectionchange" && (ed.has(n) || Fl(n, !1, e), Fl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || (t[cr] = !0, Fl("selectionchange", !1, t));
  }
}
function ra(e, t, n, r) {
  switch (As(t)) {
    case 1:
      var l = mf;
      break;
    case 4:
      l = hf;
      break;
    default:
      l = ri;
  }
  n = l.bind(null, t, n, e), l = void 0, !ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = xt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Cs(function() {
    var f = o, v = bo(n), h = [];
    e: {
      var m = ta.get(e);
      if (m !== void 0) {
        var w = oi, S = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = zf;
            break;
          case "focusin":
            S = "focus", w = zl;
            break;
          case "focusout":
            S = "blur", w = zl;
            break;
          case "beforeblur":
          case "afterblur":
            w = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Df;
            break;
          case Js:
          case qs:
          case bs:
            w = kf;
            break;
          case ea:
            w = Mf;
            break;
          case "scroll":
            w = vf;
            break;
          case "wheel":
            w = If;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = lu;
        }
        var x = (t & 4) !== 0, M = !x && e === "scroll", d = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var a = f, p; a !== null; ) {
          p = a;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, d !== null && (y = Dn(a, d), y != null && x.push(An(a, y, p)))), M) break;
          a = a.return;
        }
        0 < x.length && (m = new w(m, S, null, n, v), h.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== uo && (S = n.relatedTarget || n.fromElement) && (xt(S) || S[Xe])) break e;
        if ((w || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (S = n.relatedTarget || n.toElement, w = f, S = S ? xt(S) : null, S !== null && (M = Dt(S), S !== M || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null, S = f), w !== S)) {
          if (x = nu, y = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = lu, y = "onPointerLeave", d = "onPointerEnter", a = "pointer"), M = w == null ? m : At(w), p = S == null ? m : At(S), m = new x(y, a + "leave", w, n, v), m.target = M, m.relatedTarget = p, y = null, xt(v) === f && (x = new x(d, a + "enter", S, n, v), x.target = p, x.relatedTarget = M, y = x), M = y, w && S) t: {
            for (x = w, d = S, a = 0, p = x; p; p = Ot(p)) a++;
            for (p = 0, y = d; y; y = Ot(y)) p++;
            for (; 0 < a - p; ) x = Ot(x), a--;
            for (; 0 < p - a; ) d = Ot(d), p--;
            for (; a--; ) {
              if (x === d || d !== null && x === d.alternate) break t;
              x = Ot(x), d = Ot(d);
            }
            x = null;
          }
          else x = null;
          w !== null && hu(h, m, w, x, !1), S !== null && M !== null && hu(h, M, S, x, !0);
        }
      }
      e: {
        if (m = f ? At(f) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var E = Wf;
        else if (uu(m)) if (Ks) E = Xf;
        else {
          E = Kf;
          var C = Qf;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Yf);
        if (E && (E = E(e, f))) {
          Qs(h, E, n, v);
          break e;
        }
        C && C(e, m, f), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && no(m, "number", m.value);
      }
      switch (C = f ? At(f) : window, e) {
        case "focusin":
          (uu(C) || C.contentEditable === "true") && (Ut = C, ho = f, Cn = null);
          break;
        case "focusout":
          Cn = ho = Ut = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vo = !1, du(h, n, v);
          break;
        case "selectionchange":
          if (Jf) break;
        case "keydown":
        case "keyup":
          du(h, n, v);
      }
      var _;
      if (ui) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else It ? Hs(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Bs && n.locale !== "ko" && (It || T !== "onCompositionStart" ? T === "onCompositionEnd" && It && (_ = Vs()) : (rt = v, li = "value" in rt ? rt.value : rt.textContent, It = !0)), C = Ar(f, T), 0 < C.length && (T = new ru(T, e, null, n, v), h.push({ event: T, listeners: C }), _ ? T.data = _ : (_ = Ws(n), _ !== null && (T.data = _)))), (_ = $f ? Af(e, n) : Vf(e, n)) && (f = Ar(f, "onBeforeInput"), 0 < f.length && (v = new ru("onBeforeInput", "beforeinput", null, n, v), h.push({ event: v, listeners: f }), v.data = _));
    }
    na(h, t);
  });
}
function An(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Dn(e, n), o != null && r.unshift(An(e, o, l)), o = Dn(e, t), o != null && r.push(An(e, o, l))), e = e.return;
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = Dn(n, o), s != null && i.unshift(An(n, s, u))) : l || (s = Dn(n, o), s != null && i.push(An(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var td = /\r\n?/g, nd = /\u0000|\uFFFD/g;
function vu(e) {
  return (typeof e == "string" ? e : "" + e).replace(td, `
`).replace(nd, "");
}
function fr(e, t, n) {
  if (t = vu(t), vu(e) !== t && n) throw Error(g(425));
}
function Vr() {
}
var yo = null, go = null;
function wo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var So = typeof setTimeout == "function" ? setTimeout : void 0, rd = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
  return yu.resolve(null).then(e).catch(od);
} : So;
function od(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Fn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Fn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2), $e = "__reactFiber$" + an, Vn = "__reactProps$" + an, Xe = "__reactContainer$" + an, ko = "__reactEvents$" + an, id = "__reactListeners$" + an, ud = "__reactHandles$" + an;
function xt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gu(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = gu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Jn(e) {
  return e = e[$e] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function sl(e) {
  return e[Vn] || null;
}
var xo = [], Vt = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > Vt || (e.current = xo[Vt], xo[Vt] = null, Vt--);
}
function F(e, t) {
  Vt++, xo[Vt] = e.current, e.current = t;
}
var mt = {}, ue = vt(mt), me = vt(!1), _t = mt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Br() {
  U(me), U(ue);
}
function wu(e, t, n) {
  if (ue.current !== mt) throw Error(g(168));
  F(ue, t), F(me, n);
}
function la(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Wc(e) || "Unknown", l));
  return H({}, n, r);
}
function Hr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, _t = ue.current, F(ue, e), F(me, me.current), !0;
}
function Su(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = la(e, t, _t), r.__reactInternalMemoizedMergedChildContext = e, U(me), U(ue), F(ue, e)) : U(me), F(me, n);
}
var He = null, al = !1, $l = !1;
function oa(e) {
  He === null ? He = [e] : He.push(e);
}
function sd(e) {
  al = !0, oa(e);
}
function yt() {
  if (!$l && He !== null) {
    $l = !0;
    var e = 0, t = O;
    try {
      var n = He;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, al = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), zs(ei, yt), l;
    } finally {
      O = t, $l = !1;
    }
  }
  return null;
}
var Bt = [], Ht = 0, Wr = null, Qr = 0, Ee = [], Ne = 0, Tt = null, We = 1, Qe = "";
function St(e, t) {
  Bt[Ht++] = Qr, Bt[Ht++] = Wr, Wr = e, Qr = t;
}
function ia(e, t, n) {
  Ee[Ne++] = We, Ee[Ne++] = Qe, Ee[Ne++] = Tt, Tt = e;
  var r = We;
  e = Qe;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, We = 1 << 32 - Oe(t) + l | n << l | r, Qe = o + e;
  } else We = 1 << o | n << l | r, Qe = e;
}
function ai(e) {
  e.return !== null && (St(e, 1), ia(e, 1, 0));
}
function ci(e) {
  for (; e === Wr; ) Wr = Bt[--Ht], Bt[Ht] = null, Qr = Bt[--Ht], Bt[Ht] = null;
  for (; e === Tt; ) Tt = Ee[--Ne], Ee[Ne] = null, Qe = Ee[--Ne], Ee[Ne] = null, We = Ee[--Ne], Ee[Ne] = null;
}
var we = null, ge = null, $ = !1, De = null;
function ua(e, t) {
  var n = je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, ge = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tt !== null ? { id: We, overflow: Qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, ge = null, !0) : !1;
    default:
      return !1;
  }
}
function Eo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function No(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!ku(e, t)) {
        if (Eo(e)) throw Error(g(418));
        t = st(n.nextSibling);
        var r = we;
        t && ku(e, t) ? ua(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, we = e);
      }
    } else {
      if (Eo(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, $ = !1, we = e;
    }
  }
}
function xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function dr(e) {
  if (e !== we) return !1;
  if (!$) return xu(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps)), t && (t = ge)) {
    if (Eo(e)) throw sa(), Error(g(418));
    for (; t; ) ua(e, t), t = st(t.nextSibling);
  }
  if (xu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = we ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function sa() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function tn() {
  ge = we = null, $ = !1;
}
function fi(e) {
  De === null ? De = [e] : De.push(e);
}
var ad = Je.ReactCurrentBatchConfig;
function hn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function pr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Eu(e) {
  var t = e._init;
  return t(e._payload);
}
function aa(e) {
  function t(d, a) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [a], d.flags |= 16) : p.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), a = a.sibling;
    return null;
  }
  function r(d, a) {
    for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
    return d;
  }
  function l(d, a) {
    return d = dt(d, a), d.index = 0, d.sibling = null, d;
  }
  function o(d, a, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < a ? (d.flags |= 2, a) : p) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, p, y) {
    return a === null || a.tag !== 6 ? (a = Kl(p, d.mode, y), a.return = d, a) : (a = l(a, p), a.return = d, a);
  }
  function s(d, a, p, y) {
    var E = p.type;
    return E === Ft ? v(d, a, p.props.children, y, p.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === be && Eu(E) === a.type) ? (y = l(a, p.props), y.ref = hn(d, a, p), y.return = d, y) : (y = Lr(p.type, p.key, p.props, null, d.mode, y), y.ref = hn(d, a, p), y.return = d, y);
  }
  function f(d, a, p, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = Yl(p, d.mode, y), a.return = d, a) : (a = l(a, p.children || []), a.return = d, a);
  }
  function v(d, a, p, y, E) {
    return a === null || a.tag !== 7 ? (a = Ct(p, d.mode, y, E), a.return = d, a) : (a = l(a, p), a.return = d, a);
  }
  function h(d, a, p) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Kl("" + a, d.mode, p), a.return = d, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return p = Lr(a.type, a.key, a.props, null, d.mode, p), p.ref = hn(d, null, a), p.return = d, p;
        case Mt:
          return a = Yl(a, d.mode, p), a.return = d, a;
        case be:
          var y = a._init;
          return h(d, y(a._payload), p);
      }
      if (wn(a) || cn(a)) return a = Ct(a, d.mode, p, null), a.return = d, a;
      pr(d, a);
    }
    return null;
  }
  function m(d, a, p, y) {
    var E = a !== null ? a.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : u(d, a, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          return p.key === E ? s(d, a, p, y) : null;
        case Mt:
          return p.key === E ? f(d, a, p, y) : null;
        case be:
          return E = p._init, m(
            d,
            a,
            E(p._payload),
            y
          );
      }
      if (wn(p) || cn(p)) return E !== null ? null : v(d, a, p, y, null);
      pr(d, p);
    }
    return null;
  }
  function w(d, a, p, y, E) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return d = d.get(p) || null, u(a, d, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case nr:
          return d = d.get(y.key === null ? p : y.key) || null, s(a, d, y, E);
        case Mt:
          return d = d.get(y.key === null ? p : y.key) || null, f(a, d, y, E);
        case be:
          var C = y._init;
          return w(d, a, p, C(y._payload), E);
      }
      if (wn(y) || cn(y)) return d = d.get(p) || null, v(a, d, y, E, null);
      pr(a, y);
    }
    return null;
  }
  function S(d, a, p, y) {
    for (var E = null, C = null, _ = a, T = a = 0, A = null; _ !== null && T < p.length; T++) {
      _.index > T ? (A = _, _ = null) : A = _.sibling;
      var k = m(d, _, p[T], y);
      if (k === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && k.alternate === null && t(d, _), a = o(k, a, T), C === null ? E = k : C.sibling = k, C = k, _ = A;
    }
    if (T === p.length) return n(d, _), $ && St(d, T), E;
    if (_ === null) {
      for (; T < p.length; T++) _ = h(d, p[T], y), _ !== null && (a = o(_, a, T), C === null ? E = _ : C.sibling = _, C = _);
      return $ && St(d, T), E;
    }
    for (_ = r(d, _); T < p.length; T++) A = w(_, d, T, p[T], y), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? T : A.key), a = o(A, a, T), C === null ? E = A : C.sibling = A, C = A);
    return e && _.forEach(function(R) {
      return t(d, R);
    }), $ && St(d, T), E;
  }
  function x(d, a, p, y) {
    var E = cn(p);
    if (typeof E != "function") throw Error(g(150));
    if (p = E.call(p), p == null) throw Error(g(151));
    for (var C = E = null, _ = a, T = a = 0, A = null, k = p.next(); _ !== null && !k.done; T++, k = p.next()) {
      _.index > T ? (A = _, _ = null) : A = _.sibling;
      var R = m(d, _, k.value, y);
      if (R === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && R.alternate === null && t(d, _), a = o(R, a, T), C === null ? E = R : C.sibling = R, C = R, _ = A;
    }
    if (k.done) return n(
      d,
      _
    ), $ && St(d, T), E;
    if (_ === null) {
      for (; !k.done; T++, k = p.next()) k = h(d, k.value, y), k !== null && (a = o(k, a, T), C === null ? E = k : C.sibling = k, C = k);
      return $ && St(d, T), E;
    }
    for (_ = r(d, _); !k.done; T++, k = p.next()) k = w(_, d, T, k.value, y), k !== null && (e && k.alternate !== null && _.delete(k.key === null ? T : k.key), a = o(k, a, T), C === null ? E = k : C.sibling = k, C = k);
    return e && _.forEach(function(Y) {
      return t(d, Y);
    }), $ && St(d, T), E;
  }
  function M(d, a, p, y) {
    if (typeof p == "object" && p !== null && p.type === Ft && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          e: {
            for (var E = p.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = p.type, E === Ft) {
                  if (C.tag === 7) {
                    n(d, C.sibling), a = l(C, p.props.children), a.return = d, d = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === be && Eu(E) === C.type) {
                  n(d, C.sibling), a = l(C, p.props), a.ref = hn(d, C, p), a.return = d, d = a;
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === Ft ? (a = Ct(p.props.children, d.mode, y, p.key), a.return = d, d = a) : (y = Lr(p.type, p.key, p.props, null, d.mode, y), y.ref = hn(d, a, p), y.return = d, d = y);
          }
          return i(d);
        case Mt:
          e: {
            for (C = p.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                n(d, a.sibling), a = l(a, p.children || []), a.return = d, d = a;
                break e;
              } else {
                n(d, a);
                break;
              }
              else t(d, a);
              a = a.sibling;
            }
            a = Yl(p, d.mode, y), a.return = d, d = a;
          }
          return i(d);
        case be:
          return C = p._init, M(d, a, C(p._payload), y);
      }
      if (wn(p)) return S(d, a, p, y);
      if (cn(p)) return x(d, a, p, y);
      pr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(d, a.sibling), a = l(a, p), a.return = d, d = a) : (n(d, a), a = Kl(p, d.mode, y), a.return = d, d = a), i(d)) : n(d, a);
  }
  return M;
}
var nn = aa(!0), ca = aa(!1), Kr = vt(null), Yr = null, Wt = null, di = null;
function pi() {
  di = Wt = Yr = null;
}
function mi(e) {
  var t = Kr.current;
  U(Kr), e._currentValue = t;
}
function jo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Jt(e, t) {
  Yr = e, di = Wt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (di !== e) if (e = { context: e, memoizedValue: t, next: null }, Wt === null) {
    if (Yr === null) throw Error(g(308));
    Wt = e, Yr.dependencies = { lanes: 0, firstContext: e };
  } else Wt = Wt.next = e;
  return t;
}
var Et = null;
function hi(e) {
  Et === null ? Et = [e] : Et.push(e);
}
function fa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, hi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ge(e, r);
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function vi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function da(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ke(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ge(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, hi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ge(e, n);
}
function jr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ti(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Xr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, i === null ? o = f : i.next = f, i = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== i && (u === null ? v.firstBaseUpdate = f : u.next = f, v.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, v = f = s = null, u = o;
    do {
      var m = u.lane, w = u.eventTime;
      if ((r & m) === m) {
        v !== null && (v = v.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, x = u;
          switch (m = t, w = n, x.tag) {
            case 1:
              if (S = x.payload, typeof S == "function") {
                h = S.call(w, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = x.payload, m = typeof S == "function" ? S.call(w, h, m) : S, m == null) break e;
              h = H({}, h, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (f = v = w, s = h) : v = v.next = w, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = h), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    zt |= i, e.lanes = i, e.memoizedState = h;
  }
}
function ju(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var qn = {}, Ve = vt(qn), Bn = vt(qn), Hn = vt(qn);
function Nt(e) {
  if (e === qn) throw Error(g(174));
  return e;
}
function yi(e, t) {
  switch (F(Hn, t), F(Bn, e), F(Ve, qn), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lo(t, e);
  }
  U(Ve), F(Ve, t);
}
function rn() {
  U(Ve), U(Bn), U(Hn);
}
function pa(e) {
  Nt(Hn.current);
  var t = Nt(Ve.current), n = lo(t, e.type);
  t !== n && (F(Bn, e), F(Ve, n));
}
function gi(e) {
  Bn.current === e && (U(Ve), U(Bn));
}
var V = vt(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Al = [];
function wi() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Cr = Je.ReactCurrentDispatcher, Vl = Je.ReactCurrentBatchConfig, Pt = 0, B = null, Z = null, b = null, Zr = !1, _n = !1, Wn = 0, cd = 0;
function le() {
  throw Error(g(321));
}
function Si(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function ki(e, t, n, r, l, o) {
  if (Pt = o, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cr.current = e === null || e.memoizedState === null ? md : hd, e = n(r, l), _n) {
    o = 0;
    do {
      if (_n = !1, Wn = 0, 25 <= o) throw Error(g(301));
      o += 1, b = Z = null, t.updateQueue = null, Cr.current = vd, e = n(r, l);
    } while (_n);
  }
  if (Cr.current = Jr, t = Z !== null && Z.next !== null, Pt = 0, b = Z = B = null, Zr = !1, t) throw Error(g(300));
  return e;
}
function xi() {
  var e = Wn !== 0;
  return Wn = 0, e;
}
function Ue() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return b === null ? B.memoizedState = b = e : b = b.next = e, b;
}
function Te() {
  if (Z === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = b === null ? B.memoizedState : b.next;
  if (t !== null) b = t, Z = e;
  else {
    if (e === null) throw Error(g(310));
    Z = e, e = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, b === null ? B.memoizedState = b = e : b = b.next = e;
  }
  return b;
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Te(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = Z, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, f = o;
    do {
      var v = f.lane;
      if ((Pt & v) === v) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var h = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, B.lanes |= v, zt |= v;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = u, Fe(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, B.lanes |= o, zt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = Te(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Fe(o, t.memoizedState) || (pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ma() {
}
function ha(e, t) {
  var n = B, r = Te(), l = t(), o = !Fe(r.memoizedState, l);
  if (o && (r.memoizedState = l, pe = !0), r = r.queue, Ei(ga.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || b !== null && b.memoizedState.tag & 1) {
    if (n.flags |= 2048, Kn(9, ya.bind(null, n, r, l, t), void 0, null), ee === null) throw Error(g(349));
    Pt & 30 || va(n, t, l);
  }
  return l;
}
function va(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ya(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wa(t) && Sa(e);
}
function ga(e, t, n) {
  return n(function() {
    wa(t) && Sa(e);
  });
}
function wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Sa(e) {
  var t = Ge(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Cu(e) {
  var t = Ue();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qn, lastRenderedState: e }, t.queue = e, e = e.dispatch = pd.bind(null, B, e), [t.memoizedState, e];
}
function Kn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ka() {
  return Te().memoizedState;
}
function _r(e, t, n, r) {
  var l = Ue();
  B.flags |= e, l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r);
}
function cl(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (o = i.destroy, r !== null && Si(r, i.deps)) {
      l.memoizedState = Kn(t, n, o, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = Kn(1 | t, n, o, r);
}
function _u(e, t) {
  return _r(8390656, 8, e, t);
}
function Ei(e, t) {
  return cl(2048, 8, e, t);
}
function xa(e, t) {
  return cl(4, 2, e, t);
}
function Ea(e, t) {
  return cl(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ja(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cl(4, 4, Na.bind(null, t, e), n);
}
function Ni() {
}
function Ca(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function _a(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ta(e, t, n) {
  return Pt & 21 ? (Fe(n, t) || (n = Ds(), B.lanes |= n, zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function fd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Vl.transition = r;
  }
}
function Pa() {
  return Te().memoizedState;
}
function dd(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) La(t, n);
  else if (n = fa(e, t, n, r), n !== null) {
    var l = ae();
    Me(n, e, r, l), Ra(n, t, r);
  }
}
function pd(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) La(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, hi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = fa(e, t, l, r), n !== null && (l = ae(), Me(n, e, r, l), Ra(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B;
}
function La(e, t) {
  _n = Zr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ti(e, n);
  }
}
var Jr = { readContext: _e, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, md = { readContext: _e, useCallback: function(e, t) {
  return Ue().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: _u, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _r(
    4194308,
    4,
    Na.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return _r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return _r(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ue();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ue();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = dd.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ue();
  return e = { current: e }, t.memoizedState = e;
}, useState: Cu, useDebugValue: Ni, useDeferredValue: function(e) {
  return Ue().memoizedState = e;
}, useTransition: function() {
  var e = Cu(!1), t = e[0];
  return e = fd.bind(null, e[1]), Ue().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = B, l = Ue();
  if ($) {
    if (n === void 0) throw Error(g(407));
    n = n();
  } else {
    if (n = t(), ee === null) throw Error(g(349));
    Pt & 30 || va(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, _u(ga.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Kn(9, ya.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ue(), t = ee.identifierPrefix;
  if ($) {
    var n = Qe, r = We;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Wn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = cd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, hd = {
  readContext: _e,
  useCallback: Ca,
  useContext: _e,
  useEffect: Ei,
  useImperativeHandle: ja,
  useInsertionEffect: xa,
  useLayoutEffect: Ea,
  useMemo: _a,
  useReducer: Bl,
  useRef: ka,
  useState: function() {
    return Bl(Qn);
  },
  useDebugValue: Ni,
  useDeferredValue: function(e) {
    var t = Te();
    return Ta(t, Z.memoizedState, e);
  },
  useTransition: function() {
    var e = Bl(Qn)[0], t = Te().memoizedState;
    return [e, t];
  },
  useMutableSource: ma,
  useSyncExternalStore: ha,
  useId: Pa,
  unstable_isNewReconciler: !1
}, vd = { readContext: _e, useCallback: Ca, useContext: _e, useEffect: Ei, useImperativeHandle: ja, useInsertionEffect: xa, useLayoutEffect: Ea, useMemo: _a, useReducer: Hl, useRef: ka, useState: function() {
  return Hl(Qn);
}, useDebugValue: Ni, useDeferredValue: function(e) {
  var t = Te();
  return Z === null ? t.memoizedState = e : Ta(t, Z.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Qn)[0], t = Te().memoizedState;
  return [e, t];
}, useMutableSource: ma, useSyncExternalStore: ha, useId: Pa, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = H({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Co(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ft(e), o = Ke(r, l);
  o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Me(t, e, l, r), jr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ft(e), o = Ke(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Me(t, e, l, r), jr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = ft(e), l = Ke(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Me(t, e, r, n), jr(t, e, r));
} };
function Tu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, o) : !0;
}
function Da(e, t, n) {
  var r = !1, l = mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = _e(o) : (l = he(t) ? _t : ue.current, r = t.contextTypes, o = (r = r != null) ? en(e, l) : mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Pu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function _o(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, vi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = _e(o) : (o = he(t) ? _t : ue.current, l.context = en(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Co(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), Xr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ln(e, t) {
  try {
    var n = "", r = t;
    do
      n += Hc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function To(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var yd = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, t, n) {
  n = Ke(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    br || (br = !0, Uo = r), To(e, t);
  }, n;
}
function Ma(e, t, n) {
  n = Ke(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      To(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    To(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ld.bind(null, e, t, n), t.then(e, e));
}
function Lu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ru(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var gd = Je.ReactCurrentOwner, pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? ca(t, null, n, r) : nn(t, e.child, n, r);
}
function Du(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Jt(t, l), r = ki(e, t, n, r, o, l), n = xi(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : ($ && n && ai(t), t.flags |= 1, se(e, t, r, l), t.child);
}
function Ou(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ri(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Fa(e, t, o, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Un, n(i, r) && e.ref === t.ref) return Ze(e, t, l);
  }
  return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Fa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Un(o, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, Ze(e, t, l);
  }
  return Po(e, t, n, r, l);
}
function Ia(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(Kt, ye), ye |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(Kt, ye), ye |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, F(Kt, ye), ye |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, F(Kt, ye), ye |= r;
  return se(e, t, l, n), t.child;
}
function Ua(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Po(e, t, n, r, l) {
  var o = he(n) ? _t : ue.current;
  return o = en(t, o), Jt(t, l), n = ki(e, t, n, r, o, l), r = xi(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : ($ && r && ai(t), t.flags |= 1, se(e, t, n, l), t.child);
}
function Mu(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Hr(t);
  } else o = !1;
  if (Jt(t, l), t.stateNode === null) Tr(e, t), Da(t, n, r), _o(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = _e(f) : (f = he(n) ? _t : ue.current, f = en(t, f));
    var v = n.getDerivedStateFromProps, h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== f) && Pu(t, i, r, f), et = !1;
    var m = t.memoizedState;
    i.state = m, Xr(t, r, i, l), s = t.memoizedState, u !== r || m !== s || me.current || et ? (typeof v == "function" && (Co(t, n, v, r), s = t.memoizedState), (u = et || Tu(t, n, u, r, m, s, f)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, da(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Le(t.type, u), i.props = f, h = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = he(n) ? _t : ue.current, s = en(t, s));
    var w = n.getDerivedStateFromProps;
    (v = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Pu(t, i, r, s), et = !1, m = t.memoizedState, i.state = m, Xr(t, r, i, l);
    var S = t.memoizedState;
    u !== h || m !== S || me.current || et ? (typeof w == "function" && (Co(t, n, w, r), S = t.memoizedState), (f = et || Tu(t, n, f, r, m, S, s) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return zo(e, t, n, r, o, l);
}
function zo(e, t, n, r, l, o) {
  Ua(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Su(t, n, !1), Ze(e, t, o);
  r = t.stateNode, gd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = nn(t, e.child, null, o), t.child = nn(t, null, u, o)) : se(e, t, u, o), t.memoizedState = r.state, l && Su(t, n, !0), t.child;
}
function $a(e) {
  var t = e.stateNode;
  t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1), yi(e, t.containerInfo);
}
function Fu(e, t, n, r, l) {
  return tn(), fi(l), t.flags |= 256, se(e, t, n, r), t.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, t, n) {
  var r = t.pendingProps, l = V.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(V, l & 1), e === null)
    return No(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = ml(i, r, 0, null), e = Ct(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ro(n), t.memoizedState = Lo, e) : ji(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return wd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = dt(u, o) : (o = Ct(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ro(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Lo, r;
  }
  return o = e.child, e = o.sibling, r = dt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ji(e, t) {
  return t = ml({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function mr(e, t, n, r) {
  return r !== null && fi(r), nn(t, e.child, null, n), e = ji(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Wl(Error(g(422))), mr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), o = Ct(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && nn(t, e.child, null, i), t.child.memoizedState = Ro(i), t.memoizedState = Lo, o);
  if (!(t.mode & 1)) return mr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(g(419)), r = Wl(o, r, void 0), mr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, pe || u) {
    if (r = ee, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ge(e, l), Me(r, e, l, -1));
    }
    return Li(), r = Wl(Error(g(421))), mr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = st(l.nextSibling), we = t, $ = !0, De = null, e !== null && (Ee[Ne++] = We, Ee[Ne++] = Qe, Ee[Ne++] = Tt, We = e.id, Qe = e.overflow, Tt = t), t = ji(t, r.children), t.flags |= 4096, t);
}
function Iu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jo(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Va(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (se(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t);
      else if (e.tag === 19) Iu(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (F(V, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Gr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ql(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Gr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ql(t, !0, n, null, o);
      break;
    case "together":
      Ql(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ze(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), zt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Sd(e, t, n) {
  switch (t.tag) {
    case 3:
      $a(t), tn();
      break;
    case 5:
      pa(t);
      break;
    case 1:
      he(t.type) && Hr(t);
      break;
    case 4:
      yi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(Kr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Aa(e, t, n) : (F(V, V.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Va(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(V, V.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ia(e, t, n);
  }
  return Ze(e, t, n);
}
var Ba, Do, Ha, Wa;
Ba = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Do = function() {
};
Ha = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        l = eo(e, l), r = eo(e, r), o = [];
        break;
      case "select":
        l = H({}, l, { value: void 0 }), r = H({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    oo(n, r);
    var i;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Ln.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Ln.hasOwnProperty(f) ? (s != null && f === "onScroll" && I("scroll", e), o || u === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Wa = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!$) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function kd(e, t, n) {
  var r = t.pendingProps;
  switch (ci(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return he(t.type) && Br(), oe(t), null;
    case 3:
      return r = t.stateNode, rn(), U(me), U(ue), wi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (dr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, De !== null && (Vo(De), De = null))), Do(e, t), oe(t), null;
    case 5:
      gi(t);
      var l = Nt(Hn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ha(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return oe(t), null;
        }
        if (e = Nt(Ve.current), dr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[$e] = t, r[Vn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) I(kn[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I(
                "error",
                r
              ), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Ki(r, o), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, I("invalid", r);
              break;
            case "textarea":
              Xi(r, o), I("invalid", r);
          }
          oo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && fr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && fr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Ln.hasOwnProperty(i) && u != null && i === "onScroll" && I("scroll", r);
          }
          switch (n) {
            case "input":
              rr(r), Yi(r, o, !0);
              break;
            case "textarea":
              rr(r), Gi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[$e] = t, e[Vn] = r, Ba(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = io(n, r), n) {
              case "dialog":
                I("cancel", e), I("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) I(kn[l], e);
                l = r;
                break;
              case "source":
                I("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                I(
                  "error",
                  e
                ), I("load", e), l = r;
                break;
              case "details":
                I("toggle", e), l = r;
                break;
              case "input":
                Ki(e, r), l = eo(e, r), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = H({}, r, { value: void 0 }), I("invalid", e);
                break;
              case "textarea":
                Xi(e, r), l = ro(e, r), I("invalid", e);
                break;
              default:
                l = r;
            }
            oo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? ks(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ws(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Rn(e, s) : typeof s == "number" && Rn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ln.hasOwnProperty(o) ? s != null && o === "onScroll" && I("scroll", e) : s != null && Go(e, o, s, i));
            }
            switch (n) {
              case "input":
                rr(e), Yi(e, r, !1);
                break;
              case "textarea":
                rr(e), Gi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Yt(e, !!r.multiple, o, !1) : r.defaultValue != null && Yt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (n = Nt(Hn.current), Nt(Ve.current), dr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (o = r.nodeValue !== n) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              fr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return oe(t), null;
    case 13:
      if (U(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128)) sa(), tn(), t.flags |= 98560, o = !1;
        else if (o = dr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(g(317));
            o[$e] = t;
          } else tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          oe(t), o = !1;
        } else De !== null && (Vo(De), De = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? J === 0 && (J = 3) : Li())), t.updateQueue !== null && (t.flags |= 4), oe(t), null);
    case 4:
      return rn(), Do(e, t), e === null && $n(t.stateNode.containerInfo), oe(t), null;
    case 10:
      return mi(t.type._context), oe(t), null;
    case 17:
      return he(t.type) && Br(), oe(t), null;
    case 19:
      if (U(V), o = t.memoizedState, o === null) return oe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) vn(o, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Gr(e), i !== null) {
            for (t.flags |= 128, vn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(V, V.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > on && (t.flags |= 128, r = !0, vn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Gr(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return oe(t), null;
        } else 2 * K() - o.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128, r = !0, vn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = V.current, F(V, r ? n & 1 | 2 : n & 1), t) : (oe(t), null);
    case 22:
    case 23:
      return zi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function xd(e, t) {
  switch (ci(t), t.tag) {
    case 1:
      return he(t.type) && Br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return rn(), U(me), U(ue), wi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return gi(t), null;
    case 13:
      if (U(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(g(340));
        tn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(V), null;
    case 4:
      return rn(), null;
    case 10:
      return mi(t.type._context), null;
    case 22:
    case 23:
      return zi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1, ie = !1, Ed = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    W(e, t, r);
  }
  else n.current = null;
}
function Oo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Uu = !1;
function Nd(e, t) {
  if (yo = Ur, e = Gs(), si(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, f = 0, v = 0, h = e, m = null;
        t: for (; ; ) {
          for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (w = h.firstChild) !== null; )
            m = h, h = w;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++f === l && (u = i), m === o && ++v === r && (s = i), (w = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (go = { focusedElem: e, selectionRange: n }, Ur = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var x = S.memoizedProps, M = S.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Le(t.type, x), M);
            d.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(g(163));
      }
    } catch (y) {
      W(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return S = Uu, Uu = !1, S;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Oo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Qa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[Vn], delete t[ko], delete t[id], delete t[ud])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ka(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $u(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ka(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), e = e.sibling;
}
function Io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Io(e, t, n), e = e.sibling; e !== null; ) Io(e, t, n), e = e.sibling;
}
var te = null, Re = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), n = n.sibling;
}
function Ya(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(ll, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ie || Qt(n, t);
    case 6:
      var r = te, l = Re;
      te = null, qe(e, t, n), te = r, Re = l, te !== null && (Re ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (Re ? (e = te, n = n.stateNode, e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n), Fn(e)) : Ul(te, n.stateNode));
      break;
    case 4:
      r = te, l = Re, te = n.stateNode.containerInfo, Re = !0, qe(e, t, n), te = r, Re = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Oo(n, t, i), l = l.next;
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (!ie && (Qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        W(n, t, u);
      }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, qe(e, t, n), ie = r) : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ed()), t.forEach(function(r) {
      var l = Dd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            te = u.stateNode, Re = !1;
            break e;
          case 3:
            te = u.stateNode.containerInfo, Re = !0;
            break e;
          case 4:
            te = u.stateNode.containerInfo, Re = !0;
            break e;
        }
        u = u.return;
      }
      if (te === null) throw Error(g(160));
      Ya(o, i, l), te = null, Re = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      W(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xa(t, e), t = t.sibling;
}
function Xa(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Ie(e), r & 4) {
        try {
          Tn(3, e, e.return), dl(3, e);
        } catch (x) {
          W(e, e.return, x);
        }
        try {
          Tn(5, e, e.return);
        } catch (x) {
          W(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), Ie(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (ze(t, e), Ie(e), r & 512 && n !== null && Qt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (x) {
          W(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && vs(l, o), io(u, i);
          var f = io(u, o);
          for (i = 0; i < s.length; i += 2) {
            var v = s[i], h = s[i + 1];
            v === "style" ? ks(l, h) : v === "dangerouslySetInnerHTML" ? ws(l, h) : v === "children" ? Rn(l, h) : Go(l, v, h, f);
          }
          switch (u) {
            case "input":
              to(l, o);
              break;
            case "textarea":
              ys(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? Yt(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? Yt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Yt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Vn] = o;
        } catch (x) {
          W(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ze(t, e), Ie(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (x) {
          W(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ze(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fn(t.containerInfo);
      } catch (x) {
        W(e, e.return, x);
      }
      break;
    case 4:
      ze(t, e), Ie(e);
      break;
    case 13:
      ze(t, e), Ie(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ti = K())), r & 4 && Au(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (f = ie) || v, ze(t, e), ie = f) : ze(t, e), Ie(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !v && e.mode & 1) for (N = e, v = e.child; v !== null; ) {
          for (h = N = v; N !== null; ) {
            switch (m = N, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tn(4, m, m.return);
                break;
              case 1:
                Qt(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (x) {
                    W(r, n, x);
                  }
                }
                break;
              case 5:
                Qt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Bu(h);
                  continue;
                }
            }
            w !== null ? (w.return = m, N = w) : Bu(h);
          }
          v = v.sibling;
        }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                l = h.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ss("display", i));
              } catch (x) {
                W(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (v === null) try {
              h.stateNode.nodeValue = f ? "" : h.memoizedProps;
            } catch (x) {
              W(e, e.return, x);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), h = h.return;
          }
          v === h && (v = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), Ie(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ka(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), r.flags &= -33);
          var o = $u(e);
          Io(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = $u(e);
          Fo(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jd(e, t, n) {
  N = e, Ga(e);
}
function Ga(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || hr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ie;
        u = hr;
        var f = ie;
        if (hr = i, (ie = s) && !f) for (N = l; N !== null; ) i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? Hu(l) : s !== null ? (s.return = i, N = s) : Hu(l);
        for (; o !== null; ) N = o, Ga(o), o = o.sibling;
        N = l, hr = u, ie = f;
      }
      Vu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Vu(e);
  }
}
function Vu(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ie || dl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ie) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && ju(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              ju(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var f = t.alternate;
              if (f !== null) {
                var v = f.memoizedState;
                if (v !== null) {
                  var h = v.dehydrated;
                  h !== null && Fn(h);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(g(163));
        }
        ie || t.flags & 512 && Mo(t);
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Bu(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Hu(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Mo(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mo(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var Cd = Math.ceil, qr = Je.ReactCurrentDispatcher, Ci = Je.ReactCurrentOwner, Ce = Je.ReactCurrentBatchConfig, D = 0, ee = null, X = null, ne = 0, ye = 0, Kt = vt(0), J = 0, Yn = null, zt = 0, pl = 0, _i = 0, Pn = null, de = null, Ti = 0, on = 1 / 0, Be = null, br = !1, Uo = null, ct = null, vr = !1, lt = null, el = 0, zn = 0, $o = null, Pr = -1, zr = 0;
function ae() {
  return D & 6 ? K() : Pr !== -1 ? Pr : Pr = K();
}
function ft(e) {
  return e.mode & 1 ? D & 2 && ne !== 0 ? ne & -ne : ad.transition !== null ? (zr === 0 && (zr = Ds()), zr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : As(e.type)), e) : 1;
}
function Me(e, t, n, r) {
  if (50 < zn) throw zn = 0, $o = null, Error(g(185));
  Gn(e, n, r), (!(D & 2) || e !== ee) && (e === ee && (!(D & 2) && (pl |= n), J === 4 && nt(e, ne)), ve(e, r), n === 1 && D === 0 && !(t.mode & 1) && (on = K() + 500, al && yt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  af(e, t);
  var r = Ir(e, e === ee ? ne : 0);
  if (r === 0) n !== null && qi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && qi(n), t === 1) e.tag === 0 ? sd(Wu.bind(null, e)) : oa(Wu.bind(null, e)), ld(function() {
      !(D & 6) && yt();
    }), n = null;
    else {
      switch (Os(r)) {
        case 1:
          n = ei;
          break;
        case 4:
          n = Ls;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = Rs;
          break;
        default:
          n = Fr;
      }
      n = rc(n, Za.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Za(e, t) {
  if (Pr = -1, zr = 0, D & 6) throw Error(g(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = qa();
    (ee !== e || ne !== t) && (Be = null, on = K() + 500, jt(e, t));
    do
      try {
        Pd();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    pi(), qr.current = o, D = l, X !== null ? t = 0 : (ee = null, ne = 0, t = J);
  }
  if (t !== 0) {
    if (t === 2 && (l = fo(e), l !== 0 && (r = l, t = Ao(e, l))), t === 1) throw n = Yn, jt(e, 0), nt(e, r), ve(e, K()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !_d(l) && (t = tl(e, r), t === 2 && (o = fo(e), o !== 0 && (r = o, t = Ao(e, o))), t === 1)) throw n = Yn, jt(e, 0), nt(e, r), ve(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          kt(e, de, Be);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = Ti + 500 - K(), 10 < t)) {
            if (Ir(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = So(kt.bind(null, e, de, Be), t);
            break;
          }
          kt(e, de, Be);
          break;
        case 4:
          if (nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = So(kt.bind(null, e, de, Be), r);
            break;
          }
          kt(e, de, Be);
          break;
        case 5:
          kt(e, de, Be);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? Za.bind(null, e) : null;
}
function Ao(e, t) {
  var n = Pn;
  return e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256), e = tl(e, t), e !== 2 && (t = de, de = n, t !== null && Vo(t)), e;
}
function Vo(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function _d(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function nt(e, t) {
  for (t &= ~_i, t &= ~pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Wu(e) {
  if (D & 6) throw Error(g(327));
  qt();
  var t = Ir(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fo(e);
    r !== 0 && (t = r, n = Ao(e, r));
  }
  if (n === 1) throw n = Yn, jt(e, 0), nt(e, t), ve(e, K()), n;
  if (n === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, kt(e, de, Be), ve(e, K()), null;
}
function Pi(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (on = K() + 500, al && yt());
  }
}
function Lt(e) {
  lt !== null && lt.tag === 0 && !(D & 6) && qt();
  var t = D;
  D |= 1;
  var n = Ce.transition, r = O;
  try {
    if (Ce.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ce.transition = n, D = t, !(D & 6) && yt();
  }
}
function zi() {
  ye = Kt.current, U(Kt);
}
function jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, rd(n)), X !== null) for (n = X.return; n !== null; ) {
    var r = n;
    switch (ci(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Br();
        break;
      case 3:
        rn(), U(me), U(ue), wi();
        break;
      case 5:
        gi(r);
        break;
      case 4:
        rn();
        break;
      case 13:
        U(V);
        break;
      case 19:
        U(V);
        break;
      case 10:
        mi(r.type._context);
        break;
      case 22:
      case 23:
        zi();
    }
    n = n.return;
  }
  if (ee = e, X = e = dt(e.current, null), ne = ye = t, J = 0, Yn = null, _i = pl = zt = 0, de = Pn = null, Et !== null) {
    for (t = 0; t < Et.length; t++) if (n = Et[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Et = null;
  }
  return e;
}
function Ja(e, t) {
  do {
    var n = X;
    try {
      if (pi(), Cr.current = Jr, Zr) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Zr = !1;
      }
      if (Pt = 0, b = Z = B = null, _n = !1, Wn = 0, Ci.current = null, n === null || n.return === null) {
        J = 1, Yn = t, X = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ne, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, v = u, h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var w = Lu(i);
          if (w !== null) {
            w.flags &= -257, Ru(w, i, u, o, t), w.mode & 1 && zu(o, f, t), t = w, s = f;
            var S = t.updateQueue;
            if (S === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(s), t.updateQueue = x;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              zu(o, f, t), Li();
              break e;
            }
            s = Error(g(426));
          }
        } else if ($ && u.mode & 1) {
          var M = Lu(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Ru(M, i, u, o, t), fi(ln(s, u));
            break e;
          }
        }
        o = s = ln(s, u), J !== 4 && (J = 2), Pn === null ? Pn = [o] : Pn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = Oa(o, s, t);
              Nu(o, d);
              break e;
            case 1:
              u = s;
              var a = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ct === null || !ct.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = Ma(o, u, t);
                Nu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ec(n);
    } catch (E) {
      t = E, X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = qr.current;
  return qr.current = Jr, e === null ? Jr : e;
}
function Li() {
  (J === 0 || J === 3 || J === 2) && (J = 4), ee === null || !(zt & 268435455) && !(pl & 268435455) || nt(ee, ne);
}
function tl(e, t) {
  var n = D;
  D |= 2;
  var r = qa();
  (ee !== e || ne !== t) && (Be = null, jt(e, t));
  do
    try {
      Td();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if (pi(), D = n, qr.current = r, X !== null) throw Error(g(261));
  return ee = null, ne = 0, J;
}
function Td() {
  for (; X !== null; ) ba(X);
}
function Pd() {
  for (; X !== null && !bc(); ) ba(X);
}
function ba(e) {
  var t = nc(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, t === null ? ec(e) : X = t, Ci.current = null;
}
function ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xd(n, t), n !== null) {
        n.flags &= 32767, X = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, X = null;
        return;
      }
    } else if (n = kd(n, t, ye), n !== null) {
      X = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function kt(e, t, n) {
  var r = O, l = Ce.transition;
  try {
    Ce.transition = null, O = 1, zd(e, t, n, r);
  } finally {
    Ce.transition = l, O = r;
  }
  return null;
}
function zd(e, t, n, r) {
  do
    qt();
  while (lt !== null);
  if (D & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (cf(e, o), e === ee && (X = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vr || (vr = !0, rc(Fr, function() {
    return qt(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var i = O;
    O = 1;
    var u = D;
    D |= 4, Ci.current = null, Nd(e, n), Xa(n, e), Zf(go), Ur = !!yo, go = yo = null, e.current = n, jd(n), ef(), D = u, O = i, Ce.transition = o;
  } else e.current = n;
  if (vr && (vr = !1, lt = e, el = l), o = e.pendingLanes, o === 0 && (ct = null), rf(n.stateNode), ve(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw br = !1, e = Uo, Uo = null, e;
  return el & 1 && e.tag !== 0 && qt(), o = e.pendingLanes, o & 1 ? e === $o ? zn++ : (zn = 0, $o = e) : zn = 0, yt(), null;
}
function qt() {
  if (lt !== null) {
    var e = Os(el), t = Ce.transition, n = O;
    try {
      if (Ce.transition = null, O = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, el = 0, D & 6) throw Error(g(331));
        var l = D;
        for (D |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (N = f; N !== null; ) {
                  var v = N;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) h.return = v, N = h;
                  else for (; N !== null; ) {
                    v = N;
                    var m = v.sibling, w = v.return;
                    if (Qa(v), v === f) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, N = m;
                      break;
                    }
                    N = w;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var M = x.sibling;
                    x.sibling = null, x = M;
                  } while (x !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
          else e: for (; N !== null; ) {
            if (o = N, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Tn(9, o, o.return);
            }
            var d = o.sibling;
            if (d !== null) {
              d.return = o.return, N = d;
              break e;
            }
            N = o.return;
          }
        }
        var a = e.current;
        for (N = a; N !== null; ) {
          i = N;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, N = p;
          else e: for (i = a; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  dl(9, u);
              }
            } catch (E) {
              W(u, u.return, E);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var y = u.sibling;
            if (y !== null) {
              y.return = u.return, N = y;
              break e;
            }
            N = u.return;
          }
        }
        if (D = l, yt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(ll, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ce.transition = t;
    }
  }
  return !1;
}
function Qu(e, t, n) {
  t = ln(n, t), t = Oa(e, t, 1), e = at(e, t, 1), t = ae(), e !== null && (Gn(e, 1, t), ve(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Qu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Qu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = ln(n, e), e = Ma(t, e, 1), t = at(t, e, 1), e = ae(), t !== null && (Gn(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ld(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > K() - Ti ? jt(e, 0) : _i |= n), ve(e, t);
}
function tc(e, t) {
  t === 0 && (e.mode & 1 ? (t = ir, ir <<= 1, !(ir & 130023424) && (ir = 4194304)) : t = 1);
  var n = ae();
  e = Ge(e, t), e !== null && (Gn(e, t, n), ve(e, n));
}
function Rd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tc(e, n);
}
function Dd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), tc(e, n);
}
var nc;
nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, Sd(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, $ && t.flags & 1048576 && ia(t, Qr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Tr(e, t), e = t.pendingProps;
      var l = en(t, ue.current);
      Jt(t, n), l = ki(null, t, r, e, l, n);
      var o = xi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (o = !0, Hr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vi(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, _o(t, r, e, n), t = zo(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && ai(t), se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Tr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Md(r), e = Le(r, e), l) {
          case 0:
            t = Po(null, t, r, e, n);
            break e;
          case 1:
            t = Mu(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = Ou(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Po(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Mu(e, t, r, l, n);
    case 3:
      e: {
        if ($a(t), e === null) throw Error(g(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, da(e, t), Xr(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = ln(Error(g(423)), t), t = Fu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = ln(Error(g(424)), t), t = Fu(e, t, r, n, l);
          break e;
        } else for (ge = st(t.stateNode.containerInfo.firstChild), we = t, $ = !0, De = null, n = ca(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (tn(), r === l) {
            t = Ze(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pa(t), e === null && No(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, wo(r, l) ? i = null : o !== null && wo(r, o) && (t.flags |= 32), Ua(e, t), se(e, t, i, n), t.child;
    case 6:
      return e === null && No(t), null;
    case 13:
      return Aa(e, t, n);
    case 4:
      return yi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nn(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Du(e, t, r, l, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, F(Kr, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
          if (o.children === l.children && !me.current) {
            t = Ze(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ke(-1, n & -n), s.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var v = f.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), f.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), jo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(g(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), jo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Jt(t, n), l = _e(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ou(e, t, r, l, n);
    case 15:
      return Fa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Tr(e, t), t.tag = 1, he(r) ? (e = !0, Hr(t)) : e = !1, Jt(t, n), Da(t, r, l), _o(t, r, l, n), zo(null, t, r, !0, e, n);
    case 19:
      return Va(e, t, n);
    case 22:
      return Ia(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function rc(e, t) {
  return zs(e, t);
}
function Od(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function je(e, t, n, r) {
  return new Od(e, t, n, r);
}
function Ri(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Md(e) {
  if (typeof e == "function") return Ri(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Jo) return 11;
    if (e === qo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Lr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Ri(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Ft:
      return Ct(n.children, l, o, t);
    case Zo:
      i = 8, l |= 8;
      break;
    case Zl:
      return e = je(12, n, t, l | 2), e.elementType = Zl, e.lanes = o, e;
    case Jl:
      return e = je(13, n, t, l), e.elementType = Jl, e.lanes = o, e;
    case ql:
      return e = je(19, n, t, l), e.elementType = ql, e.lanes = o, e;
    case ps:
      return ml(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fs:
          i = 10;
          break e;
        case ds:
          i = 9;
          break e;
        case Jo:
          i = 11;
          break e;
        case qo:
          i = 14;
          break e;
        case be:
          i = 16, r = null;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return t = je(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ct(e, t, n, r) {
  return e = je(7, e, r, t), e.lanes = n, e;
}
function ml(e, t, n, r) {
  return e = je(22, e, r, t), e.elementType = ps, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, t, n) {
  return e = je(6, e, null, t), e.lanes = n, e;
}
function Yl(e, t, n) {
  return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Fd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Di(e, t, n, r, l, o, i, u, s) {
  return e = new Fd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vi(o), e;
}
function Id(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Dt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return la(e, n, t);
  }
  return t;
}
function oc(e, t, n, r, l, o, i, u, s) {
  return e = Di(n, r, !0, e, l, o, i, u, s), e.context = lc(null), n = e.current, r = ae(), l = ft(n), o = Ke(r, l), o.callback = t ?? null, at(n, o, l), e.current.lanes = l, Gn(e, l, r), ve(e, r), e;
}
function hl(e, t, n, r) {
  var l = t.current, o = ae(), i = ft(l);
  return n = lc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ke(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, i), e !== null && (Me(e, l, i, o), jr(e, l, i)), i;
}
function nl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ku(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oi(e, t) {
  Ku(e, t), (e = e.alternate) && Ku(e, t);
}
function Ud() {
  return null;
}
var ic = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Mi(e) {
  this._internalRoot = e;
}
vl.prototype.render = Mi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  hl(e, t, null, null);
};
vl.prototype.unmount = Mi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function() {
      hl(null, e, null, null);
    }), t[Xe] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Is();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++) ;
    tt.splice(n, 0, e), n === 0 && $s(e);
  }
};
function Fi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Yu() {
}
function $d(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = nl(i);
        o.call(f);
      };
    }
    var i = oc(t, r, e, 0, null, !1, !1, "", Yu);
    return e._reactRootContainer = i, e[Xe] = i.current, $n(e.nodeType === 8 ? e.parentNode : e), Lt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = nl(s);
      u.call(f);
    };
  }
  var s = Di(e, 0, !1, null, null, !1, !1, "", Yu);
  return e._reactRootContainer = s, e[Xe] = s.current, $n(e.nodeType === 8 ? e.parentNode : e), Lt(function() {
    hl(t, s, n, r);
  }), s;
}
function gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = nl(i);
        u.call(s);
      };
    }
    hl(t, i, e, l);
  } else i = $d(n, t, e, l, r);
  return nl(i);
}
Ms = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 && (ti(t, n | 1), ve(t, K()), !(D & 6) && (on = K() + 500, yt()));
      }
      break;
    case 13:
      Lt(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ae();
          Me(r, e, 1, l);
        }
      }), Oi(e, 1);
  }
};
ni = function(e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ae();
      Me(t, e, 134217728, n);
    }
    Oi(e, 134217728);
  }
};
Fs = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Ge(e, t);
    if (n !== null) {
      var r = ae();
      Me(n, e, t, r);
    }
    Oi(e, t);
  }
};
Is = function() {
  return O;
};
Us = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
so = function(e, t, n) {
  switch (t) {
    case "input":
      if (to(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(g(90));
            hs(r), to(r, l);
          }
        }
      }
      break;
    case "textarea":
      ys(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Ns = Pi;
js = Lt;
var Ad = { usingClientEntryPoint: !1, Events: [Jn, At, sl, xs, Es, Pi] }, yn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vd = { bundleType: yn.bundleType, version: yn.version, rendererPackageName: yn.rendererPackageName, rendererConfig: yn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ts(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yn.findFiberByHostInstance || Ud, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber) try {
    ll = yr.inject(Vd), Ae = yr;
  } catch {
  }
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fi(t)) throw Error(g(200));
  return Id(e, t, null, n);
};
ke.createRoot = function(e, t) {
  if (!Fi(e)) throw Error(g(299));
  var n = !1, r = "", l = ic;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Di(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new Mi(t);
};
ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Ts(t), e = e === null ? null : e.stateNode, e;
};
ke.flushSync = function(e) {
  return Lt(e);
};
ke.hydrate = function(e, t, n) {
  if (!yl(t)) throw Error(g(200));
  return gl(null, e, t, !0, n);
};
ke.hydrateRoot = function(e, t, n) {
  if (!Fi(e)) throw Error(g(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = ic;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = oc(t, null, e, 1, n ?? null, l, !1, o, i), e[Xe] = t.current, $n(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new vl(t);
};
ke.render = function(e, t, n) {
  if (!yl(t)) throw Error(g(200));
  return gl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function(e) {
  if (!yl(e)) throw Error(g(40));
  return e._reactRootContainer ? (Lt(function() {
    gl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
ke.unstable_batchedUpdates = Pi;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!yl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return gl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function uc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc);
    } catch (e) {
      console.error(e);
    }
}
uc(), us.exports = ke;
var Bd = us.exports, sc, Xu = Bd;
sc = Xu.createRoot, Xu.hydrateRoot;
const Bo = { High: 0, Medium: 1, Low: 2 };
function Hd(e) {
  if (e === null) return [];
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error("Planner data is not valid JSON.");
  }
  if (!Array.isArray(t))
    throw new Error("Planner data must be a list of tasks.");
  return t.map((n, r) => {
    if (!n || typeof n.id != "string" || typeof n.title != "string" || typeof n.subject != "string")
      throw new Error(`Planner task ${r + 1} is missing required fields.`);
    return {
      ...n,
      due: typeof n.due == "string" ? n.due : "",
      time: typeof n.time == "string" ? n.time : "",
      priority: Object.hasOwn(Bo, n.priority) ? n.priority : "Medium",
      notes: typeof n.notes == "string" ? n.notes : "",
      done: n.done === !0
    };
  });
}
function parseTaskBackup(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    throw new Error("Backup file is not valid JSON.");
  }
  if (!t || t.version !== 1 || !Array.isArray(t.tasks))
    throw new Error("Choose a valid StudySprout backup file.");
  const n = Hd(JSON.stringify(t.tasks)), r = /* @__PURE__ */ new Set();
  for (const [l, o] of n.entries()) {
    if (!o.title.trim() || !o.subject.trim())
      throw new Error(`Backup task ${l + 1} needs a title and subject.`);
    if (r.has(o.id))
      throw new Error("Backup contains duplicate task IDs.");
    r.add(o.id);
  }
  return n;
}
function Ii(e = /* @__PURE__ */ new Date()) {
  return [
    e.getFullYear(),
    String(e.getMonth() + 1).padStart(2, "0"),
    String(e.getDate()).padStart(2, "0")
  ].join("-");
}
function Ui(e, t = Ii(), n = (/* @__PURE__ */ new Date()).toTimeString().slice(0, 5)) {
  return !e.done && !!e.due && (e.due < t || e.due === t && !!e.time && e.time < n);
}
function ac(e, t) {
  const n = t.query.trim().toLocaleLowerCase();
  return e.filter((l) => {
    const o = !n || `${l.title} ${l.subject} ${l.notes}`.toLocaleLowerCase().includes(n), i = t.subject === "All" || l.subject === t.subject, u = t.status === "All" || t.status === "Pending" && !l.done || t.status === "Done" && l.done || t.status === "Overdue" && Ui(l);
    return o && i && u;
  }).sort((l, o) => t.sort === "priority" ? Bo[l.priority] - Bo[o.priority] || (l.due || "9999").localeCompare(o.due || "9999") || (l.time || "").localeCompare(o.time || "") : (l.due || "9999").localeCompare(o.due || "9999") || (l.time || "").localeCompare(o.time || ""));
}
function Wd(e, t = Ii()) {
  const n = e.filter((i) => i.done).length, r = e.filter((i) => Ui(i, t)).length, l = e.length ? Math.round(n / e.length * 100) : 0, o = [...new Set(e.map((i) => i.subject))].sort((i, u) => i.localeCompare(u)).map((i) => {
    const u = e.filter((f) => f.subject === i), s = u.filter((f) => f.done).length;
    return {
      subject: i,
      total: u.length,
      completed: s,
      progress: Math.round(s / u.length * 100)
    };
  });
  return {
    total: e.length,
    completed: n,
    pending: e.length - n,
    overdue: r,
    progress: l,
    bySubject: o
  };
}
function Qd(e) {
  if (!e) return "No due date";
  const t = /* @__PURE__ */ new Date(`${e}T00:00:00`);
  return Number.isNaN(t.getTime()) ? "Date unavailable" : new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" }).format(t);
}
function cc({ task: e, onToggle: t, onEdit: n, onDelete: r, readOnly: l = !1 }) {
  const o = Ui(e);
  return /* @__PURE__ */ c.jsxs("li", { className: `task-item ${e.done ? "is-done" : ""}`, children: [
    l ? /* @__PURE__ */ c.jsx("span", { className: `task-check ${e.done ? "checked" : ""}`, "aria-hidden": "true", children: e.done ? "✓" : "" }) : /* @__PURE__ */ c.jsx(
      "button",
      {
        className: `task-check ${e.done ? "checked" : ""}`,
        type: "button",
        "aria-label": e.done ? `Mark ${e.title} pending` : `Mark ${e.title} complete`,
        "aria-pressed": e.done,
        onClick: t,
        children: e.done ? "✓" : ""
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "task-content", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "task-title-row", children: [
        /* @__PURE__ */ c.jsx("h3", { children: e.title }),
        /* @__PURE__ */ c.jsx("span", { className: `priority-badge priority-${e.priority.toLowerCase()}`, children: e.priority })
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "task-meta", children: [
        /* @__PURE__ */ c.jsx("span", { children: e.subject }),
        /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "·" }),
        /* @__PURE__ */ c.jsxs("span", { className: o ? "text-danger" : "", children: [
          o ? "Overdue · " : "",
          Qd(e.due),
          e.time && ` · ${e.time}`
        ] })
      ] }),
      e.notes && /* @__PURE__ */ c.jsx("p", { className: "task-notes", children: e.notes })
    ] }),
    !l && /* @__PURE__ */ c.jsxs("div", { className: "task-actions", children: [
      /* @__PURE__ */ c.jsx("button", { className: "btn btn-sm btn-light", type: "button", onClick: n, "aria-label": `Edit ${e.title}`, children: "Edit" }),
      /* @__PURE__ */ c.jsx("button", { className: "btn btn-sm btn-light text-danger", type: "button", onClick: r, "aria-label": `Delete ${e.title}`, children: "Delete" })
    ] })
  ] });
}
function Kd({ tasks: e, summary: t, dueSoon: n, onNavigateToPlanner: r }) {
  const l = ac(e.filter((o) => !o.done), {
    query: "",
    subject: "All",
    status: "All",
    sort: "due"
  }).slice(0, 4);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx("h1", { className: "visually-hidden", children: "Study progress" }),
    /* @__PURE__ */ c.jsxs("section", { className: "stats-grid", "aria-label": "Task summary", children: [
      /* @__PURE__ */ c.jsx(gr, { label: "Total tasks", value: t.total, tone: "indigo" }),
      /* @__PURE__ */ c.jsx(gr, { label: "Completed", value: t.completed, tone: "green" }),
      /* @__PURE__ */ c.jsx(gr, { label: "Due soon", value: n, tone: "amber" }),
      /* @__PURE__ */ c.jsx(gr, { label: "Overdue", value: t.overdue, tone: "red" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "dashboard-grid", children: [
      /* @__PURE__ */ c.jsxs("section", { className: "dashboard-panel", "aria-labelledby": "up-next-title", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "STAY ON TRACK" }),
            /* @__PURE__ */ c.jsx("h2", { id: "up-next-title", children: "Up next" })
          ] }),
          /* @__PURE__ */ c.jsxs("a", { href: "#/planner", children: [
            "All tasks ",
            /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
          ] })
        ] }),
        l.length ? /* @__PURE__ */ c.jsx("ul", { className: "task-list compact-list", children: l.map((o) => /* @__PURE__ */ c.jsx(
          cc,
          {
            task: o,
            readOnly: !0,
            onEdit: r,
            onDelete: r
          },
          o.id
        )) }) : /* @__PURE__ */ c.jsxs("div", { className: "empty-state compact-empty", children: [
          /* @__PURE__ */ c.jsx("h3", { children: "You’re all caught up." }),
          /* @__PURE__ */ c.jsx("p", { children: "Add a task whenever something new is due." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { className: "dashboard-panel", "aria-labelledby": "progress-title", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "CONSISTENCY COUNTS" }),
            /* @__PURE__ */ c.jsx("h2", { id: "progress-title", children: "Overall progress" })
          ] }),
          /* @__PURE__ */ c.jsxs("span", { className: "progress-percent", children: [
            t.progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "progress dashboard-progress",
            role: "progressbar",
            "aria-label": "Overall completed tasks",
            "aria-valuenow": t.progress,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            children: /* @__PURE__ */ c.jsx("div", { className: "progress-bar", style: { width: `${t.progress}%` } })
          }
        ),
        /* @__PURE__ */ c.jsxs("p", { className: "progress-caption", children: [
          t.completed,
          " of ",
          t.total,
          " tasks completed"
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "subject-progress-list", children: t.bySubject.length ? t.bySubject.map((o) => /* @__PURE__ */ c.jsxs("div", { className: "subject-progress", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "subject-progress-label", children: [
            /* @__PURE__ */ c.jsx("span", { children: o.subject }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              o.completed,
              "/",
              o.total
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "progress subject-progress-bar", role: "progressbar", "aria-label": `${o.subject} progress`, "aria-valuenow": o.progress, "aria-valuemin": "0", "aria-valuemax": "100", children: /* @__PURE__ */ c.jsx("div", { className: "progress-bar", style: { width: `${o.progress}%` } }) })
        ] }, o.subject)) : /* @__PURE__ */ c.jsx("p", { className: "muted-copy", children: "Subject progress will show here after you add tasks." }) })
      ] })
    ] })
  ] });
}
function gr({ label: e, value: t, tone: n }) {
  return /* @__PURE__ */ c.jsxs("article", { className: `stat-card stat-${n}`, children: [
    /* @__PURE__ */ c.jsx("p", { children: e }),
    /* @__PURE__ */ c.jsx("strong", { children: t })
  ] });
}
function Yd({ onLoadSamples: e, hasTasks: t }) {
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("section", { className: "hero-section", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "A LITTLE MORE FOCUS, EVERY DAY" }),
        /* @__PURE__ */ c.jsx("h1", { children: "Stay on top of your studies." }),
        /* @__PURE__ */ c.jsx("p", { className: "hero-description", children: "StudySprout helps students organize deadlines, prioritize work, and see progress without the last-minute scramble." }),
        /* @__PURE__ */ c.jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ c.jsx("a", { className: "btn btn-primary btn-lg", href: "#/planner", children: "Open your planner" }),
          /* @__PURE__ */ c.jsx("a", { className: "btn btn-outline-primary btn-lg", href: "#/dashboard", children: "View progress" })
        ] }),
        /* @__PURE__ */ c.jsx("p", { className: "privacy-note", children: "No account required. Your planner stays in this browser." })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "hero-card", "aria-label": "StudySprout benefits", children: [
        /* @__PURE__ */ c.jsx("div", { className: "hero-card-icon", "aria-hidden": "true", children: "✓" }),
        /* @__PURE__ */ c.jsx("p", { className: "hero-card-label", children: "YOUR WEEK, IN VIEW" }),
        /* @__PURE__ */ c.jsx("h2", { children: "One clear next step." }),
        /* @__PURE__ */ c.jsx("p", { children: "Capture what's due, choose a priority, and keep moving forward." })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("section", { className: "feature-section", "aria-labelledby": "features-title", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "MADE FOR STUDENT LIFE" }),
        /* @__PURE__ */ c.jsx("h2", { id: "features-title", children: "A simpler way to study" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ c.jsx(
          Xl,
          {
            number: "01",
            title: "Track every task",
            text: "Keep assignments, exams, and readings together with dates, subjects, and notes."
          }
        ),
        /* @__PURE__ */ c.jsx(
          Xl,
          {
            number: "02",
            title: "Find what matters",
            text: "Search by keyword, filter by subject or status, and sort by deadline or priority."
          }
        ),
        /* @__PURE__ */ c.jsx(
          Xl,
          {
            number: "03",
            title: "See your progress",
            text: "Use your dashboard to review completed work, upcoming deadlines, and subject progress."
          }
        )
      ] }),
      !t && /* @__PURE__ */ c.jsxs("div", { className: "sample-callout", children: [
        /* @__PURE__ */ c.jsx("p", { children: "Want to see how it works before adding your own tasks?" }),
        /* @__PURE__ */ c.jsx("button", { className: "btn btn-sm btn-outline-secondary", type: "button", onClick: e, children: "Try sample tasks" })
      ] })
    ] })
  ] });
}
function Xl({ number: e, title: t, text: n }) {
  return /* @__PURE__ */ c.jsx("div", { className: "col-md-4", children: /* @__PURE__ */ c.jsxs("article", { className: "feature-card h-100", children: [
    /* @__PURE__ */ c.jsx("span", { className: "feature-number", children: e }),
    /* @__PURE__ */ c.jsx("h3", { children: t }),
    /* @__PURE__ */ c.jsx("p", { children: n })
  ] }) });
}
const Xd = [
  { href: "#/", label: "Home", route: "/" },
  { href: "#/planner", label: "Planner", route: "/planner" },
  { href: "#/dashboard", label: "Dashboard", route: "/dashboard" }
];
function Gd({ currentRoute: e, theme: t, onThemeChange: n }) {
  const [r, l] = G.useState(!1);
  return /* @__PURE__ */ c.jsx("header", { className: "site-header", children: /* @__PURE__ */ c.jsxs("nav", { className: "container navbar navbar-expand-md", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ c.jsxs("a", { className: "navbar-brand brand-mark", href: "#/", "aria-label": "StudySprout home", children: [
      /* @__PURE__ */ c.jsx("span", { className: "brand-icon", "aria-hidden": "true", children: "S" }),
      "StudySprout"
    ] }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "navbar-toggler",
        type: "button",
        "aria-controls": "main-navigation",
        "aria-expanded": r,
        "aria-label": "Toggle navigation",
        onClick: () => l((o) => !o),
        children: /* @__PURE__ */ c.jsx("span", { className: "navbar-toggler-icon" })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: `collapse navbar-collapse${r ? " show" : ""}`, id: "main-navigation", children: /* @__PURE__ */ c.jsxs("ul", { className: "navbar-nav ms-auto", children: [
      Xd.map((o) => /* @__PURE__ */ c.jsx("li", { className: "nav-item", children: /* @__PURE__ */ c.jsx(
        "a",
        {
          className: `nav-link ${e === o.route ? "active" : ""}`,
          href: o.href,
          "aria-current": e === o.route ? "page" : void 0,
          onClick: () => l(!1),
          children: o.label
        }
      ) }, o.route)),
      /* @__PURE__ */ c.jsx("li", { className: "nav-item", children: /* @__PURE__ */ c.jsxs(
        "button",
        {
          className: "theme-toggle nav-link",
          type: "button",
          "aria-label": `Switch to ${t === "dark" ? "light" : "dark"} mode`,
          onClick: n,
          children: [
            /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: t === "dark" ? "☀" : "☾" }),
            t === "dark" ? "Light mode" : "Dark mode"
          ]
        }
      ) })
    ] }) })
  ] }) });
}
const wr = {
  title: "",
  subject: "",
  due: "",
  time: "",
  priority: "Medium",
  notes: ""
};
function Zd({ task: e, subjects: t, disabled: n, onSubmit: r, onCancel: l }) {
  const [o, i] = G.useState(wr), [u, s] = G.useState("");
  G.useEffect(() => {
    i(e ? { ...wr, ...e } : wr);
  }, [e]);
  function f(h) {
    const { name: m, value: w } = h.target;
    i((S) => ({ ...S, [m]: w })), s("");
  }
  function v(h) {
    h.preventDefault();
    const m = h.currentTarget;
    if (o.title.trim().length < 3 || !o.subject.trim()) {
      s(
        o.title.trim().length < 3 ? "Title must be at least 3 characters." : "Subject is required."
      );
      return;
    }
    if (!e && o.due && o.due < Ii()) {
      s("Due date cannot be in the past.");
      return;
    }
    if (!m.reportValidity()) return;
    r({
      ...o,
      title: o.title.trim(),
      subject: o.subject.trim(),
      notes: o.notes.trim()
    }) && !e && i(wr);
  }
  return /* @__PURE__ */ c.jsx("form", { className: "task-form card", onSubmit: v, children: /* @__PURE__ */ c.jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "form-heading", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "TASK DETAILS" }),
        /* @__PURE__ */ c.jsx("h2", { children: e ? "Edit task" : "Add a task" })
      ] }),
      e && /* @__PURE__ */ c.jsx("button", { className: "btn btn-sm btn-link", type: "button", onClick: l, children: "Cancel" })
    ] }),
    u && /* @__PURE__ */ c.jsx("p", { className: "form-error", role: "alert", children: u }),
    /* @__PURE__ */ c.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ c.jsx("label", { className: "form-label", htmlFor: "task-title", children: "Title" }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          id: "task-title",
          className: "form-control",
          name: "title",
          value: o.title,
          onChange: f,
          placeholder: "e.g. Chapter 4 reading",
          minLength: 3,
          maxLength: 100,
          required: !0,
          disabled: n
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ c.jsx("label", { className: "form-label", htmlFor: "task-subject", children: "Subject" }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          id: "task-subject",
          className: "form-control",
          name: "subject",
          value: o.subject,
          onChange: f,
          placeholder: "e.g. Biology",
          list: "subject-options",
          maxLength: 60,
          required: !0,
          disabled: n
        }
      ),
      /* @__PURE__ */ c.jsx("datalist", { id: "subject-options", children: t.map((h) => /* @__PURE__ */ c.jsx("option", { value: h }, h)) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "row g-3", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "col-7", children: [
        /* @__PURE__ */ c.jsx("label", { className: "form-label", htmlFor: "task-due", children: "Due date" }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            id: "task-due",
            className: "form-control",
            name: "due",
            type: "date",
            value: o.due,
            onChange: f,
            required: !0,
            disabled: n
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "col-5", children: [
        /* @__PURE__ */ c.jsxs("label", { className: "form-label", htmlFor: "task-time", children: [
          "Time ",
          /* @__PURE__ */ c.jsx("span", { className: "optional-label", children: "optional" })
        ] }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            id: "task-time",
            className: "form-control",
            name: "time",
            type: "time",
            value: o.time,
            onChange: f,
            disabled: n
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-3 mb-3", children: [
      /* @__PURE__ */ c.jsx("label", { className: "form-label", htmlFor: "task-priority", children: "Priority" }),
      /* @__PURE__ */ c.jsxs(
        "select",
        {
          id: "task-priority",
          className: "form-select",
          name: "priority",
          value: o.priority,
          onChange: f,
          disabled: n,
          children: [
            /* @__PURE__ */ c.jsx("option", { children: "High" }),
            /* @__PURE__ */ c.jsx("option", { children: "Medium" }),
            /* @__PURE__ */ c.jsx("option", { children: "Low" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ c.jsxs("label", { className: "form-label", htmlFor: "task-notes", children: [
        "Notes ",
        /* @__PURE__ */ c.jsx("span", { className: "optional-label", children: "optional" })
      ] }),
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          id: "task-notes",
          className: "form-control",
          name: "notes",
          rows: "3",
          value: o.notes,
          onChange: f,
          maxLength: 500,
          placeholder: "Add a helpful reminder",
          disabled: n
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("button", { className: "btn btn-primary w-100", type: "submit", disabled: n, children: e ? "Save changes" : "Add task" })
  ] }) });
}
function Jd({ tasks: e, allTaskCount: t, onToggle: n, onEdit: r, onDelete: l }) {
  return e.length ? /* @__PURE__ */ c.jsx("ul", { className: "task-list", children: e.map((o) => /* @__PURE__ */ c.jsx(
    cc,
    {
      task: o,
      onToggle: () => n(o),
      onEdit: () => r(o),
      onDelete: () => l(o)
    },
    o.id
  )) }) : /* @__PURE__ */ c.jsxs("div", { className: "empty-state", role: "status", children: [
    /* @__PURE__ */ c.jsx("span", { className: "empty-icon", "aria-hidden": "true", children: "✓" }),
    /* @__PURE__ */ c.jsx("h3", { children: t ? "No tasks match these filters." : "Nothing on your list yet." }),
    /* @__PURE__ */ c.jsx("p", { children: t ? "Try changing your search or filters." : "Add a task to start shaping your study plan." })
  ] });
}
function qd(props) {
  const { tasks: e, subjects: t, filters: n, onChange: r, onExport: l } = props;
  function o(i) {
    const { name: u, value: s } = i.target;
    r((f) => ({ ...f, [u]: s }));
  }
  return /* @__PURE__ */ c.jsxs("div", { className: "task-toolbar", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "task-toolbar-heading", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("p", { className: "eyebrow", children: "YOUR WORKLOAD" }),
        /* @__PURE__ */ c.jsxs("h2", { children: [
          "Tasks ",
          /* @__PURE__ */ c.jsx("span", { className: "task-count", children: e.length })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "task-toolbar-actions", children: [
        /* @__PURE__ */ c.jsx("input", {
          id: "task-backup-import",
          className: "import-backup-input",
          style: { display: "none" },
          type: "file",
          accept: ".json,application/json",
          "aria-label": "Choose a StudySprout backup file",
          onChange: props.onImport
        }),
        /* @__PURE__ */ c.jsx("button", {
          className: "btn btn-sm btn-outline-secondary export-button",
          type: "button",
          onClick: () => document.getElementById("task-backup-import")?.click(),
          disabled: props.disabled,
          children: "Restore backup"
        }),
        /* @__PURE__ */ c.jsx("button", {
          className: "btn btn-sm btn-outline-secondary export-button",
          type: "button",
          onClick: l,
          disabled: !e.length,
          children: "Export backup"
        }),
        /* @__PURE__ */ c.jsx("button", {
          className: "btn btn-sm btn-outline-secondary export-button",
          type: "button",
          onClick: props.onExportImage,
          disabled: !props.visibleTaskCount,
          children: "Export image"
        })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "row g-2", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "col-12", children: [
        /* @__PURE__ */ c.jsx("label", { className: "visually-hidden", htmlFor: "task-search", children: "Search tasks" }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            id: "task-search",
            className: "form-control",
            type: "search",
            name: "query",
            value: n.query,
            onChange: o,
            placeholder: "Search title, subject, or notes..."
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "col-6 col-lg-4", children: [
        /* @__PURE__ */ c.jsx("label", { className: "visually-hidden", htmlFor: "subject-filter", children: "Filter by subject" }),
        /* @__PURE__ */ c.jsxs(
          "select",
          {
            id: "subject-filter",
            className: "form-select",
            name: "subject",
            value: n.subject,
            onChange: o,
            children: [
              /* @__PURE__ */ c.jsx("option", { children: "All" }),
              t.map((i) => /* @__PURE__ */ c.jsx("option", { children: i }, i))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "col-6 col-lg-4", children: [
        /* @__PURE__ */ c.jsx("label", { className: "visually-hidden", htmlFor: "status-filter", children: "Filter by status" }),
        /* @__PURE__ */ c.jsxs(
          "select",
          {
            id: "status-filter",
            className: "form-select",
            name: "status",
            value: n.status,
            onChange: o,
            children: [
              /* @__PURE__ */ c.jsx("option", { children: "All" }),
              /* @__PURE__ */ c.jsx("option", { children: "Pending" }),
              /* @__PURE__ */ c.jsx("option", { children: "Done" }),
              /* @__PURE__ */ c.jsx("option", { children: "Overdue" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "col-12 col-lg-4", children: [
        /* @__PURE__ */ c.jsx("label", { className: "visually-hidden", htmlFor: "task-sort", children: "Sort tasks" }),
        /* @__PURE__ */ c.jsxs(
          "select",
          {
            id: "task-sort",
            className: "form-select",
            name: "sort",
            value: n.sort,
            onChange: o,
            children: [
              /* @__PURE__ */ c.jsx("option", { value: "due", children: "Sort: Due date" }),
              /* @__PURE__ */ c.jsx("option", { value: "priority", children: "Sort: Priority" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
const fc = "sp-tasks", bd = [
  {
    title: "Review lecture notes",
    subject: "Biology",
    due: Rr(1),
    time: "",
    priority: "High",
    notes: "Focus on the cell structure chapter."
  },
  {
    title: "Prepare calculus problem set",
    subject: "Mathematics",
    due: Rr(3),
    time: "",
    priority: "Medium",
    notes: ""
  },
  {
    title: "Read assigned history chapter",
    subject: "History",
    due: Rr(-1),
    time: "",
    priority: "Low",
    notes: "",
    done: !0
  }
].map((e) => ({ ...e, id: crypto.randomUUID(), done: e.done ?? !1 }));
function Rr(e) {
  const t = /* @__PURE__ */ new Date();
  return t.setDate(t.getDate() + e), [
    t.getFullYear(),
    String(t.getMonth() + 1).padStart(2, "0"),
    String(t.getDate()).padStart(2, "0")
  ].join("-");
}
function wrapCanvasText(e, t, n) {
  const r = [];
  let l = "";
  for (const o of t.split(/\s+/).filter(Boolean)) {
    let i = "";
    for (const u of o) {
      if (i && e.measureText(i + u).width > n) {
        l && (r.push(l), l = "");
        r.push(i), i = u;
      } else
        i += u;
    }
    if (!i) continue;
    const f = l ? `${l} ${i}` : i;
    l && e.measureText(f).width > n ? (r.push(l), l = i) : l = f;
  }
  return l && r.push(l), r.length ? r : ["Untitled task"];
}
function formatImageDue(e) {
  if (!e.due) return "No due date";
  const t = new Date(`${e.due}T00:00:00`);
  if (Number.isNaN(t.getTime())) return "Date unavailable";
  const n = new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(t);
  return e.time ? `${n} at ${e.time}` : n;
}
function ep() {
  try {
    return { tasks: Hd(window.localStorage.getItem(fc)), error: "" };
  } catch (e) {
    return {
      tasks: [],
      error: e instanceof Error ? e.message : "Saved planner data could not be read."
    };
  }
}
function Gu() {
  const e = window.location.hash.replace(/^#/, "");
  return e === "/planner" || e === "/dashboard" ? e : "/";
}
function tp() {
  const e = G.useMemo(ep, []), [t, n] = G.useState(e.tasks), [r, l] = G.useState(e.error), [o, i] = G.useState(Gu), [u, s] = G.useState(
    () => document.documentElement.dataset.theme || "light"
  ), [f, v] = G.useState(""), [h, m] = G.useState({
    query: "",
    subject: "All",
    status: "All",
    sort: "due"
  }), [w, S] = G.useState(null);
  G.useEffect(() => {
    const k = () => i(Gu());
    return window.addEventListener("hashchange", k), () => window.removeEventListener("hashchange", k);
  }, []);
  const x = G.useMemo(
    () => [...new Set(t.map((k) => k.subject))].sort((k, R) => k.localeCompare(R)),
    [t]
  ), M = G.useMemo(
    () => ac(t, h),
    [t, h]
  ), d = G.useMemo(() => Wd(t), [t]);
  function a(k, R) {
    if (r)
      return v("Planner changes are disabled because saved data could not be read."), !1;
    try {
      return window.localStorage.setItem(fc, JSON.stringify(k)), n(k), v(R), !0;
    } catch (Y) {
      return v(
        Y instanceof Error ? `Planner changes could not be saved: ${Y.message}` : "Planner changes could not be saved. Check browser storage and try again."
      ), !1;
    }
  }
  function p(k) {
    if (w) {
      const R = t.map(
        (Y) => Y.id === w.id ? { ...Y, ...k } : Y
      );
      return a(R, "Task updated.") ? (S(null), !0) : !1;
    }
    return a(
      [{ ...k, id: crypto.randomUUID(), done: !1 }, ...t],
      "Task added."
    );
  }
  function y(k) {
    a(
      t.map(
        (R) => R.id === k.id ? { ...R, done: !R.done } : R
      ),
      k.done ? "Task marked as pending." : "Task completed."
    );
  }
  function E(k) {
    window.confirm(`Delete "${k.title}"? This cannot be undone.`) && (a(
      t.filter((R) => R.id !== k.id),
      "Task deleted."
    ), (w == null ? void 0 : w.id) === k.id && S(null));
  }
  function C() {
    const k = [...bd, ...t];
    a(k, "Sample tasks added to your planner.") && (window.location.hash = "/planner");
  }
  function _() {
    const k = u === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = k, document.querySelector('meta[name="theme-color"]').content = k === "dark" ? "#111827" : "#f7f8fc", s(k);
    try {
      window.localStorage.setItem("sp-theme", k);
    } catch (R) {
      v(
        R instanceof Error ? `Theme changed, but your preference could not be saved: ${R.message}` : "Theme changed, but your preference could not be saved."
      );
    }
  }
  function T() {
    try {
      const k = {
        version: 1,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        tasks: t
      }, R = new Blob([JSON.stringify(k, null, 2)], {
        type: "application/json"
      }), Y = document.createElement("a"), Pe = URL.createObjectURL(R);
      try {
        Y.href = Pe, Y.download = `studysprout-backup-${Rr(0)}.json`, document.body.appendChild(Y), Y.click(), v("Your task backup was downloaded.");
      } finally {
        Y.remove(), window.setTimeout(() => URL.revokeObjectURL(Pe), 1e3);
      }
    } catch (k) {
      v(
        k instanceof Error ? `Task backup could not be downloaded: ${k.message}` : "Task backup could not be downloaded."
      );
    }
  }
  async function importTasks(event) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = "";
    if (!file) return;
    try {
      const importedTasks = parseTaskBackup(await file.text());
      const confirmed = window.confirm(
        `Replace your ${t.length} current tasks with ${importedTasks.length} tasks from this backup?`
      );
      if (!confirmed) return;
      a(importedTasks, "Your planner was restored from backup.") && S(null);
    } catch (error) {
      v(error instanceof Error ? `Backup could not be restored: ${error.message}` : "Backup could not be restored. Choose a valid StudySprout backup.");
    }
  }
  async function exportTaskImage() {
    if (!M.length) return;
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      const measuringContext = canvas.getContext("2d");
      if (!measuringContext)
        throw new Error("Canvas image export is not supported by this browser.");
      const padding = 64, cardWidth = canvas.width - padding * 2;
      measuringContext.font = "600 25px Inter, ui-sans-serif, system-ui, sans-serif";
      const taskRows = M.map((task) => {
        const titleLines = wrapCanvasText(measuringContext, task.title.trim() || "Untitled task", cardWidth - 52);
        return { task, titleLines, height: 120 + Math.max(0, titleLines.length - 1) * 30 };
      });
      const gap = 14, headerHeight = 184;
      canvas.height = padding * 2 + headerHeight + taskRows.reduce((total, row) => total + row.height, 0) + gap * Math.max(0, taskRows.length - 1);
      const context = canvas.getContext("2d");
      if (!context)
        throw new Error("Canvas image export is not supported by this browser.");
      context.fillStyle = "#f6f7fb";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#202940";
      context.font = "700 40px Inter, ui-sans-serif, system-ui, sans-serif";
      context.fillText("StudySprout", padding, padding + 42);
      context.fillStyle = "#697386";
      context.font = "400 17px Inter, ui-sans-serif, system-ui, sans-serif";
      const exportDate = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }).format(/* @__PURE__ */ new Date());
      const completedCount = M.filter((task) => task.done).length;
      context.fillText(`${M.length} tasks · ${completedCount} completed · ${exportDate}`, padding, padding + 76);
      context.fillStyle = "#dfe2ee";
      context.fillRect(padding, padding + 105, cardWidth, 1);
      let y = padding + headerHeight;
      for (const { task, titleLines, height } of taskRows) {
        context.beginPath();
        context.roundRect(padding, y, cardWidth, height, 14);
        context.fillStyle = "#ffffff";
        context.fill();
        context.strokeStyle = "#e5e8f0";
        context.lineWidth = 1;
        context.stroke();
        context.fillStyle = task.done ? "#288363" : "#5147db";
        context.font = "700 12px Inter, ui-sans-serif, system-ui, sans-serif";
        context.fillText(task.done ? "COMPLETED" : "TO DO", padding + 26, y + 29);
        context.textAlign = "right";
        context.fillStyle = task.priority === "High" ? "#bd4d43" : task.priority === "Low" ? "#6f7a8a" : "#9b701e";
        context.fillText(`${task.priority} priority`, padding + cardWidth - 26, y + 29);
        context.textAlign = "left";
        context.fillStyle = task.done ? "#747d8d" : "#273149";
        context.font = "600 25px Inter, ui-sans-serif, system-ui, sans-serif";
        titleLines.forEach((line, index) => context.fillText(line, padding + 26, y + 66 + index * 30));
        const detailsY = y + 66 + titleLines.length * 30;
        context.fillStyle = "#697386";
        context.font = "400 15px Inter, ui-sans-serif, system-ui, sans-serif";
        context.fillText(task.subject || "General", padding + 26, detailsY, 560);
        context.textAlign = "right";
        context.fillText(`Due ${formatImageDue(task)}`, padding + cardWidth - 26, detailsY);
        context.textAlign = "left";
        y += height + gap;
      }
      const image = await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("The browser could not create the task image.")), "image/png");
      });
      const imageUrl = URL.createObjectURL(image);
      const link = document.createElement("a");
      try {
        link.href = imageUrl;
        link.download = `studysprout-tasks-${Rr(0)}.png`;
        document.body.appendChild(link);
        link.click();
        v("Your task list image was downloaded.");
      } finally {
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(imageUrl), 1e3);
      }
    } catch (error) {
      v(error instanceof Error ? `Task image could not be downloaded: ${error.message}` : "Task image could not be downloaded.");
    }
  }
  const A = t.filter((k) => {
    const R = /* @__PURE__ */ new Date(), Y = /* @__PURE__ */ new Date(`${k.due}T00:00:00`), Pe = Math.floor((Y - new Date(R.getFullYear(), R.getMonth(), R.getDate())) / 864e5);
    return !k.done && Pe >= 0 && Pe <= 3;
  }).length;
  return /* @__PURE__ */ c.jsxs("div", { className: "app-shell", children: [
    /* @__PURE__ */ c.jsx(
      Gd,
      {
        currentRoute: o,
        theme: u,
        onThemeChange: _
      }
    ),
    /* @__PURE__ */ c.jsxs("main", { className: "container app-main", children: [
      r && /* @__PURE__ */ c.jsxs("div", { className: "alert alert-danger", role: "alert", children: [
        "Saved planner data could not be loaded. ",
        r,
        " Existing data has not been changed; refresh after resolving the browser storage issue."
      ] }),
      f && /* @__PURE__ */ c.jsxs("div", { className: "alert alert-info feedback-alert", role: "status", "aria-live": "polite", children: [
        f,
        /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            className: "btn-close",
            "aria-label": "Dismiss message",
            onClick: () => v("")
          }
        )
      ] }),
      o === "/" && /* @__PURE__ */ c.jsx(Yd, { onLoadSamples: C, hasTasks: t.length > 0 }),
      o === "/dashboard" && /* @__PURE__ */ c.jsx(Kd, { tasks: t, summary: d, dueSoon: A }),
      o === "/planner" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx("h1", { className: "visually-hidden", children: "Study planner" }),
        /* @__PURE__ */ c.jsxs("div", { className: "planner-grid", children: [
          /* @__PURE__ */ c.jsx(
            Zd,
            {
              task: w,
              subjects: x,
              disabled: !!r,
              onSubmit: p,
              onCancel: () => S(null)
            }
          ),
          /* @__PURE__ */ c.jsxs("section", { className: "task-panel", "aria-label": "Study tasks", children: [
            /* @__PURE__ */ c.jsx(
              qd,
              {
                tasks: t,
                visibleTaskCount: M.length,
                subjects: x,
                filters: h,
                disabled: !!r,
                onChange: m,
                onExport: T,
                onImport: importTasks,
                onExportImage: exportTaskImage
              }
            ),
            /* @__PURE__ */ c.jsx(
              Jd,
              {
                tasks: M,
                allTaskCount: t.length,
                onToggle: y,
                onEdit: (k) => {
                  S(k), window.scrollTo({ top: 0, behavior: "smooth" });
                },
                onDelete: E
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("footer", { className: "app-footer", children: /* @__PURE__ */ c.jsxs("div", { className: "container", children: [
      "StudySprout",
      /* @__PURE__ */ c.jsx("span", { className: "footer-note", children: "Your planner is saved in this browser." })
    ] }) })
  ] });
}
const dc = document.getElementById("root");
if (!dc)
  throw new Error("StudySprout could not find its root element.");
sc(dc).render(
  /* @__PURE__ */ c.jsx(zc.StrictMode, { children: /* @__PURE__ */ c.jsx(tp, {}) })
);
