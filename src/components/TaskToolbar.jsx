import { useRef } from "react";

export default function TaskToolbar({
  tasks,
  visibleTaskCount,
  subjects,
  filters,
  disabled,
  onChange,
  onClearFilters,
  onExport,
  onExportImage,
  onImport,
}) {
  const importInput = useRef(null);
  const hasActiveFilters =
    filters.query.trim() ||
    filters.subject !== "All" ||
    filters.status !== "All" ||
    filters.sort !== "due";

  function updateFilter(event) {
    const { name, value } = event.target;
    onChange((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className="task-toolbar">
      <div className="task-toolbar-heading">
        <div>
          <p className="eyebrow">YOUR WORKLOAD</p>
          <h2>
            Tasks <span className="task-count">{visibleTaskCount}</span>
            {visibleTaskCount !== tasks.length && (
              <span className="task-count-context">of {tasks.length}</span>
            )}
          </h2>
        </div>
        <div className="task-toolbar-actions">
          <input
            ref={importInput}
            className="import-backup-input"
            type="file"
            accept=".json,application/json"
            aria-label="Choose a StudySprout backup file"
            onChange={onImport}
          />
          <button
            className="btn btn-sm btn-outline-secondary export-button"
            type="button"
            onClick={() => importInput.current?.click()}
            disabled={disabled}
          >
            Restore backup
          </button>
          <button
            className="btn btn-sm btn-outline-secondary export-button"
            type="button"
            onClick={onExport}
            disabled={!tasks.length}
          >
            Export backup
          </button>
          <button
            className="btn btn-sm btn-outline-secondary export-button"
            type="button"
            onClick={onExportImage}
            disabled={!visibleTaskCount}
          >
            Export image
          </button>
        </div>
      </div>
      <div className="row g-2">
        <div className="col-12">
          <label className="visually-hidden" htmlFor="task-search">Search tasks</label>
          <input
            id="task-search"
            className="form-control"
            type="search"
            name="query"
            value={filters.query}
            onChange={updateFilter}
            placeholder="Search title, subject, or notes..."
          />
        </div>
        <div className="col-6 col-lg-4">
          <label className="visually-hidden" htmlFor="subject-filter">Filter by subject</label>
          <select
            id="subject-filter"
            className="form-select"
            name="subject"
            value={filters.subject}
            onChange={updateFilter}
          >
            <option>All</option>
            {subjects.map((subject) => <option key={subject}>{subject}</option>)}
          </select>
        </div>
        <div className="col-6 col-lg-4">
          <label className="visually-hidden" htmlFor="status-filter">Filter by status</label>
          <select
            id="status-filter"
            className="form-select"
            name="status"
            value={filters.status}
            onChange={updateFilter}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Done</option>
            <option>Overdue</option>
          </select>
        </div>
        <div className="col-12 col-lg-4">
          <label className="visually-hidden" htmlFor="task-sort">Sort tasks</label>
          <select
            id="task-sort"
            className="form-select"
            name="sort"
            value={filters.sort}
            onChange={updateFilter}
          >
            <option value="due">Sort: Due date</option>
            <option value="priority">Sort: Priority</option>
          </select>
        </div>
        {hasActiveFilters && (
          <div className="col-12">
            <button
              className="btn btn-sm btn-link clear-filters"
              type="button"
              onClick={onClearFilters}
            >
              Reset view
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
