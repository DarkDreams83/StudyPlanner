import { useEffect, useMemo, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import HomePage from "./components/HomePage.jsx";
import Navigation from "./components/Navigation.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskToolbar from "./components/TaskToolbar.jsx";
import {
  filterAndSortTasks,
  getTaskSummary,
  parseTasks,
} from "./data/tasks.js";

const STORAGE_KEY = "sp-tasks";
const SAMPLE_TASKS = [
  {
    title: "Review lecture notes",
    subject: "Biology",
    due: dateFromToday(1),
    time: "",
    priority: "High",
    notes: "Focus on the cell structure chapter.",
  },
  {
    title: "Prepare calculus problem set",
    subject: "Mathematics",
    due: dateFromToday(3),
    time: "",
    priority: "Medium",
    notes: "",
  },
  {
    title: "Read assigned history chapter",
    subject: "History",
    due: dateFromToday(-1),
    time: "",
    priority: "Low",
    notes: "",
    done: true,
  },
].map((task) => ({ ...task, id: crypto.randomUUID(), done: task.done ?? false }));

function dateFromToday(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function readInitialTasks() {
  try {
    return { tasks: parseTasks(window.localStorage.getItem(STORAGE_KEY)), error: "" };
  } catch (error) {
    return {
      tasks: [],
      error:
        error instanceof Error
          ? error.message
          : "Saved planner data could not be read.",
    };
  }
}

function routeFromHash() {
  const route = window.location.hash.replace(/^#/, "");
  return route === "/planner" || route === "/dashboard" ? route : "/";
}

export default function App() {
  const initial = useMemo(readInitialTasks, []);
  const [tasks, setTasks] = useState(initial.tasks);
  const [storageError, setStorageError] = useState(initial.error);
  const [route, setRoute] = useState(routeFromHash);
  const [feedback, setFeedback] = useState("");
  const [filters, setFilters] = useState({
    query: "",
    subject: "All",
    status: "All",
    sort: "due",
  });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const updateRoute = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  const subjects = useMemo(
    () => [...new Set(tasks.map((task) => task.subject))].sort((a, b) => a.localeCompare(b)),
    [tasks],
  );
  const visibleTasks = useMemo(
    () => filterAndSortTasks(tasks, filters),
    [tasks, filters],
  );
  const summary = useMemo(() => getTaskSummary(tasks), [tasks]);

  function commitTasks(nextTasks, message) {
    if (storageError) {
      setFeedback("Planner changes are disabled because saved data could not be read.");
      return false;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
      setTasks(nextTasks);
      setFeedback(message);
      return true;
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Planner changes could not be saved: ${error.message}`
          : "Planner changes could not be saved. Check browser storage and try again.",
      );
      return false;
    }
  }

  function saveTask(values) {
    if (editingTask) {
      const nextTasks = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, ...values } : task,
      );
      if (commitTasks(nextTasks, "Task updated.")) {
        setEditingTask(null);
        return true;
      }
      return false;
    }

    return commitTasks(
      [{ ...values, id: crypto.randomUUID(), done: false }, ...tasks],
      "Task added.",
    );
  }

  function toggleTask(task) {
    commitTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, done: !item.done } : item,
      ),
      task.done ? "Task marked as pending." : "Task completed.",
    );
  }

  function deleteTask(task) {
    if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) return;
    commitTasks(
      tasks.filter((item) => item.id !== task.id),
      "Task deleted.",
    );
    if (editingTask?.id === task.id) setEditingTask(null);
  }

  function loadSamples() {
    const nextTasks = [...SAMPLE_TASKS, ...tasks];
    if (commitTasks(nextTasks, "Sample tasks added to your planner.")) {
      window.location.hash = "/planner";
    }
  }

  const dueSoon = tasks.filter((task) => {
    const today = new Date();
    const due = new Date(`${task.due}T00:00:00`);
    const daysAway = Math.floor((due - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000);
    return !task.done && daysAway >= 0 && daysAway <= 3;
  }).length;

  return (
    <div className="app-shell">
      <Navigation currentRoute={route} />
      <main className="container app-main">
        {storageError && (
          <div className="alert alert-danger" role="alert">
            Saved planner data could not be loaded. {storageError} Existing data
            has not been changed; refresh after resolving the browser storage
            issue.
          </div>
        )}
        {feedback && (
          <div className="alert alert-info feedback-alert" role="status" aria-live="polite">
            {feedback}
            <button
              type="button"
              className="btn-close"
              aria-label="Dismiss message"
              onClick={() => setFeedback("")}
            />
          </div>
        )}

        {route === "/" && (
          <HomePage onLoadSamples={loadSamples} hasTasks={tasks.length > 0} />
        )}
        {route === "/dashboard" && (
          <Dashboard
            tasks={tasks}
            summary={summary}
            dueSoon={dueSoon}
            onNavigateToPlanner={() => {
              window.location.hash = "/planner";
            }}
          />
        )}
        {route === "/planner" && (
          <>
            <section className="page-heading">
              <p className="eyebrow">YOUR STUDY SPACE</p>
              <h1>Plan your next study win</h1>
              <p>Keep assignments, exams, and readings organized in one place.</p>
            </section>
            <div className="planner-grid">
              <TaskForm
                task={editingTask}
                subjects={subjects}
                disabled={Boolean(storageError)}
                onSubmit={saveTask}
                onCancel={() => setEditingTask(null)}
              />
              <section className="task-panel" aria-label="Study tasks">
                <TaskToolbar
                  tasks={tasks}
                  subjects={subjects}
                  filters={filters}
                  onChange={setFilters}
                />
                <TaskList
                  tasks={visibleTasks}
                  allTaskCount={tasks.length}
                  onToggle={toggleTask}
                  onEdit={(task) => {
                    setEditingTask(task);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  onDelete={deleteTask}
                />
              </section>
            </div>
          </>
        )}
      </main>
      <footer className="app-footer">
        <div className="container">
          StudyPlanner <span aria-hidden="true">·</span> ELECT1 Frontend Capstone
          <span className="footer-note">Your planner is saved in this browser.</span>
        </div>
      </footer>
    </div>
  );
}
