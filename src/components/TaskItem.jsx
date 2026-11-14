import { isOverdue } from "../data/tasks.js";

function formatDueDate(value) {
  if (!value) return "No due date";
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? "Date unavailable"
    : new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" }).format(date);
}

export default function TaskItem({ task, onToggle, onEdit, onDelete, readOnly = false }) {
  const overdue = isOverdue(task);

  return (
    <li className={`task-item ${task.done ? "is-done" : ""}`}>
      {readOnly ? (
        <span className={`task-check ${task.done ? "checked" : ""}`} aria-hidden="true">
          {task.done ? "✓" : ""}
        </span>
      ) : (
        <button
          className={`task-check ${task.done ? "checked" : ""}`}
          type="button"
          aria-label={task.done ? `Mark ${task.title} pending` : `Mark ${task.title} complete`}
          aria-pressed={task.done}
          onClick={onToggle}
        >
          {task.done ? "✓" : ""}
        </button>
      )}
      <div className="task-content">
        <div className="task-title-row">
          <h3>{task.title}</h3>
          <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
        </div>
        <p className="task-meta">
          <span>{task.subject}</span>
          <span aria-hidden="true">·</span>
          <span className={overdue ? "text-danger" : ""}>
            {overdue ? "Overdue · " : ""}{formatDueDate(task.due)}
            {task.time && ` · ${task.time}`}
          </span>
        </p>
        {task.notes && <p className="task-notes">{task.notes}</p>}
      </div>
      {!readOnly && (
        <div className="task-actions">
          <button className="btn btn-sm btn-light" type="button" onClick={onEdit} aria-label={`Edit ${task.title}`}>Edit</button>
          <button className="btn btn-sm btn-light text-danger" type="button" onClick={onDelete} aria-label={`Delete ${task.title}`}>Delete</button>
        </div>
      )}
    </li>
  );
}
