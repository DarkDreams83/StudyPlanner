import { filterAndSortTasks } from "../data/tasks.js";
import TaskItem from "./TaskItem.jsx";

export default function Dashboard({ tasks, summary, dueSoon, onNavigateToPlanner }) {
  const nextTasks = filterAndSortTasks(tasks.filter((task) => !task.done), {
    query: "",
    subject: "All",
    status: "All",
    sort: "due",
  }).slice(0, 4);

  return (
    <>
      <section className="page-heading dashboard-heading">
        <div>
          <p className="eyebrow">YOUR PROGRESS</p>
          <h1>A clear view of your week.</h1>
          <p>Small steps add up. Here’s where your study plan stands today.</p>
        </div>
        <button className="btn btn-primary" type="button" onClick={onNavigateToPlanner}>
          Plan a task <span aria-hidden="true">→</span>
        </button>
      </section>

      <section className="stats-grid" aria-label="Task summary">
        <StatCard label="Total tasks" value={summary.total} tone="indigo" />
        <StatCard label="Completed" value={summary.completed} tone="green" />
        <StatCard label="Due soon" value={dueSoon} tone="amber" />
        <StatCard label="Overdue" value={summary.overdue} tone="red" />
      </section>

      <div className="dashboard-grid">
        <section className="dashboard-panel" aria-labelledby="up-next-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">STAY ON TRACK</p>
              <h2 id="up-next-title">Up next</h2>
            </div>
            <a href="#/planner">All tasks <span aria-hidden="true">→</span></a>
          </div>
          {nextTasks.length ? (
            <ul className="task-list compact-list">
              {nextTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  readOnly
                  onEdit={onNavigateToPlanner}
                  onDelete={onNavigateToPlanner}
                />
              ))}
            </ul>
          ) : (
            <div className="empty-state compact-empty">
              <h3>You’re all caught up.</h3>
              <p>Add a task whenever something new is due.</p>
            </div>
          )}
        </section>

        <section className="dashboard-panel" aria-labelledby="progress-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">CONSISTENCY COUNTS</p>
              <h2 id="progress-title">Overall progress</h2>
            </div>
            <span className="progress-percent">{summary.progress}%</span>
          </div>
          <div
            className="progress dashboard-progress"
            role="progressbar"
            aria-label="Overall completed tasks"
            aria-valuenow={summary.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: `${summary.progress}%` }} />
          </div>
          <p className="progress-caption">{summary.completed} of {summary.total} tasks completed</p>
          <div className="subject-progress-list">
            {summary.bySubject.length ? summary.bySubject.map((item) => (
              <div className="subject-progress" key={item.subject}>
                <div className="subject-progress-label">
                  <span>{item.subject}</span>
                  <span>{item.completed}/{item.total}</span>
                </div>
                <div className="progress subject-progress-bar" role="progressbar" aria-label={`${item.subject} progress`} aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            )) : <p className="muted-copy">Subject progress will show here after you add tasks.</p>}
          </div>
        </section>
      </div>
    </>
  );
}

function StatCard({ label, value, tone }) {
  return (
    <article className={`stat-card stat-${tone}`}>
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  );
}
