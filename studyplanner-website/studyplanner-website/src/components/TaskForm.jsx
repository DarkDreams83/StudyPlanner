import { useEffect, useState } from "react";

const EMPTY_TASK = {
  title: "",
  subject: "",
  due: "",
  time: "",
  priority: "Medium",
  notes: "",
};

export default function TaskForm({ task, subjects, disabled, onSubmit, onCancel }) {
  const [values, setValues] = useState(EMPTY_TASK);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    setValues(task ? { ...EMPTY_TASK, ...task } : EMPTY_TASK);
  }, [task]);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setValidationError("");
  }

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (values.title.trim().length < 3 || !values.subject.trim()) {
      setValidationError(
        values.title.trim().length < 3
          ? "Title must be at least 3 characters."
          : "Subject is required.",
      );
      return;
    }
    if (!form.reportValidity()) return;
    const saved = onSubmit({
      ...values,
      title: values.title.trim(),
      subject: values.subject.trim(),
      notes: values.notes.trim(),
    });
    if (saved && !task) setValues(EMPTY_TASK);
  }

  return (
    <form className="task-form card" onSubmit={submit}>
      <div className="card-body">
        <div className="form-heading">
          <div>
            <p className="eyebrow">TASK DETAILS</p>
            <h2>{task ? "Edit task" : "Add a task"}</h2>
          </div>
          {task && (
            <button className="btn btn-sm btn-link" type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
        {validationError && <p className="form-error" role="alert">{validationError}</p>}
        <div className="mb-3">
          <label className="form-label" htmlFor="task-title">Title</label>
          <input
            id="task-title"
            className="form-control"
            name="title"
            value={values.title}
            onChange={updateField}
            placeholder="e.g. Chapter 4 reading"
            minLength={3}
            maxLength={100}
            required
            disabled={disabled}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="task-subject">Subject</label>
          <input
            id="task-subject"
            className="form-control"
            name="subject"
            value={values.subject}
            onChange={updateField}
            placeholder="e.g. Biology"
            list="subject-options"
            maxLength={60}
            required
            disabled={disabled}
          />
          <datalist id="subject-options">
            {subjects.map((subject) => <option value={subject} key={subject} />)}
          </datalist>
        </div>
        <div className="row g-3">
          <div className="col-7">
            <label className="form-label" htmlFor="task-due">Due date</label>
            <input
              id="task-due"
              className="form-control"
              name="due"
              type="date"
              value={values.due}
              onChange={updateField}
              required
              disabled={disabled}
            />
          </div>
          <div className="col-5">
            <label className="form-label" htmlFor="task-time">Time <span className="optional-label">optional</span></label>
            <input
              id="task-time"
              className="form-control"
              name="time"
              type="time"
              value={values.time}
              onChange={updateField}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="mt-3 mb-3">
          <label className="form-label" htmlFor="task-priority">Priority</label>
          <select
            id="task-priority"
            className="form-select"
            name="priority"
            value={values.priority}
            onChange={updateField}
            disabled={disabled}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="task-notes">Notes <span className="optional-label">optional</span></label>
          <textarea
            id="task-notes"
            className="form-control"
            name="notes"
            rows="3"
            value={values.notes}
            onChange={updateField}
            maxLength={500}
            placeholder="Add a helpful reminder"
            disabled={disabled}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit" disabled={disabled}>
          {task ? "Save changes" : "Add task"}
        </button>
      </div>
    </form>
  );
}
