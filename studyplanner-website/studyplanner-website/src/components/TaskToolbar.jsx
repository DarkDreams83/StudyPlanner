export default function TaskToolbar({ tasks, subjects, filters, onChange }) {
  function updateFilter(event) {
    const { name, value } = event.target;
    onChange((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className="task-toolbar">
      <div className="task-toolbar-heading">
        <div>
          <p className="eyebrow">YOUR WORKLOAD</p>
          <h2>Tasks <span className="task-count">{tasks.length}</span></h2>
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
      </div>
    </div>
  );
}
