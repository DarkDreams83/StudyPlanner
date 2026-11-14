import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, allTaskCount, onToggle, onEdit, onDelete }) {
  if (!tasks.length) {
    return (
      <div className="empty-state" role="status">
        <span className="empty-icon" aria-hidden="true">✓</span>
        <h3>{allTaskCount ? "No tasks match these filters." : "Nothing on your list yet."}</h3>
        <p>{allTaskCount ? "Try changing your search or filters." : "Add a task to start shaping your study plan."}</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task)}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task)}
        />
      ))}
    </ul>
  );
}
