# StudySprout - Frontend Web Application Capstone

StudySprout is a responsive study-task planner for students who need one place to organize assignments, exams, and readings. It helps students capture deadlines, set priorities, find tasks, and review their progress. The app is frontend-only: planner data and locally created accounts are stored in the current browser and are not synced to a server.

## Features

- Landing page that explains the app and links to the planner and dashboard.
- Responsive navigation and layouts for desktop, tablet, and mobile.
- Add and edit tasks with required title, subject, and due date; optional time and notes; and a priority.
- Search across task titles, subjects, and notes; filter by subject or status; sort by due date or priority.
- Mark tasks complete, delete tasks with confirmation, and see empty, overdue, and save-feedback states.
- Dashboard totals, due-soon and overdue counts, overall completion, subject progress, and upcoming tasks.
- Sample task data can be loaded explicitly from the landing page.
- Download and restore all tasks, including completed tasks, with validated JSON backups from the planner.
- Download the currently visible task list as a shareable PNG image.
- Light and dark themes follow the device preference initially and remember a manual choice in this browser.
- Optional local sign-in. Account credentials are hashed in the browser; this static app does not provide server authentication or account recovery.
- Tasks persist in browser `localStorage` under `sp-tasks` (scoped by the existing local account flow).

## Technology and architecture

- HTML5 entry page: `index.html`
- React 18 components and state: `src/`
- JavaScript ES modules and browser APIs: task data, validation, routing, and local persistence
- Bootstrap 5 for responsive layout and form controls; custom visual styling in `css/app.css`
- Vite for local development and production bundling
- npm for dependency management
- Git and GitHub for version control and source-code submission

The app is divided into reusable components: `Navigation`, `HomePage`, `TaskForm`, `TaskToolbar`, `TaskList`/`TaskItem`, and `Dashboard`. Shared task parsing, filtering, sorting, overdue checks, and summaries live in `src/data/tasks.js`. The app uses hash navigation for Home, Planner, and Dashboard, so it works on static hosting without a server-side router.

## Requirements checklist

| Capstone requirement | StudySprout implementation |
| --- | --- |
| Clear purpose, users, and problem | Helps students organize study deadlines and progress; described above and on the landing page. |
| HTML5, CSS3, JavaScript ES6+ | `index.html`, `css/`, and `src/`. |
| React and reusable component architecture | `src/App.jsx` and `src/components/`. |
| Props, state, and event handling | Component props and React state handle navigation, task forms, filters, completion, editing, and feedback. |
| Bootstrap or Tailwind CSS | Bootstrap 5 dependency plus custom responsive CSS. |
| npm and Vite | `package.json` and `vite.config.js`. |
| Git and GitHub | Use the Git workflow below and submit your personal repository URL. |
| Testing and debugging | `npm test`, `npm run build`, and the manual checklist below. |
| Deployment | Deploy the project root after `npm run build`; instructions below. |
| Presentation | Suggested demonstration outline below. |
| Data handling and form validation | Search/filter/sort, browser persistence, required fields, length limits, and native validity checks. |
| User feedback and functional controls | Save messages, empty states, overdue states, confirmation on deletion, and working navigation/actions. |

## Requirements

- Node.js 18 or newer and npm.
- A modern browser with JavaScript and browser storage enabled.

## Run locally

From this directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (by default `http://127.0.0.1:5173`). Continue as a guest or use the local sign-in flow, then navigate to Planner or Dashboard.

## Test and build

```bash
npm test
npm run build
```

`npm test` checks persisted-data validation, task filtering/sorting, and progress calculations. `npm run build` writes the production React bundle to `js/app.js` and its styles to `js/app.css`. The existing `index.html` and static CSS/JS files remain at the project root for deployment.

### Manual verification checklist

1. Open Home, Planner, and Dashboard from the navigation on desktop and a narrow/mobile viewport; switch themes and reload to check the saved preference.
2. Try submitting an empty task form; confirm required-field validation. Add a task and confirm it appears.
3. Edit a task, mark it complete, and delete it; confirm the success feedback and delete confirmation.
4. Search task title, subject, and notes; try every subject/status filter and each sort option.
5. Reload the page and verify tasks persist; export and restore a task backup, export the visible task list as an image, and check the dashboard's totals and subject progress.
6. With no tasks, check the empty states and try the sample-data button.
7. Test a due date in the past and a date within three days to verify overdue and due-soon indicators.

## Deploy

1. Run `npm install` and `npm run build`.
2. Deploy the project root (including `index.html`, `css/`, `js/`, and the generated `js/app.js` and `js/app.css`) to a static host such as GitHub Pages, Netlify, or Vercel.
3. For GitHub Pages, configure the site to publish the repository root or use a workflow that uploads the project root as the Pages artifact. Keep the relative asset paths intact.
4. Open the public URL and repeat the manual verification checklist. Browser data is device- and browser-specific; it is not transferred by deployment.

## GitHub source submission

Create and publish an individual repository, then replace the placeholder below in your submitted copy:

- Personal GitHub repository: **add your repository URL here**
- Live deployed application: **add your deployed URL here**

Example workflow:

```bash
git init
git add .
git commit -m "Build StudySprout frontend capstone"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repository>.git
git push -u origin main
```

Do not commit `node_modules/`. Include the generated lockfile after running `npm install`.

## Presentation outline

1. Explain the student audience, study-planning problem, and intended benefit.
2. Demonstrate navigation, adding a validated task, filtering/searching, completion, and persistence.
3. Show the dashboard and responsive layout at desktop and mobile widths.
4. Describe the component structure, React state/props/events, task utilities, Bootstrap, and `localStorage`.
5. Explain testing, limitations (browser-local data and no cross-device sync), and deployment URL.

## Acknowledgements and limitations

Bootstrap is distributed under the MIT License and is installed as an npm dependency. React, React DOM, and Vite are third-party open-source dependencies listed in `package.json`. StudySprout uses no public API or paid service. The local sign-in is a client-side demonstration only and must not be used to protect sensitive information.
