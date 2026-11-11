const PRIORITY_ORDER = { High: 0, Medium: 1, Low: 2 };

export function parseTasks(rawValue) {
  if (rawValue === null) return [];

  let parsed;
  try {
    parsed = JSON.parse(rawValue);
  } catch {
    throw new Error("Planner data is not valid JSON.");
  }

  if (!Array.isArray(parsed)) {
    throw new Error("Planner data must be a list of tasks.");
  }

  return parsed.map((task, index) => {
    if (
      !task ||
      typeof task.id !== "string" ||
      typeof task.title !== "string" ||
      typeof task.subject !== "string"
    ) {
      throw new Error(`Planner task ${index + 1} is missing required fields.`);
    }
    return {
      ...task,
      due: typeof task.due === "string" ? task.due : "",
      time: typeof task.time === "string" ? task.time : "",
      priority: Object.hasOwn(PRIORITY_ORDER, task.priority) ? task.priority : "Medium",
      notes: typeof task.notes === "string" ? task.notes : "",
      done: task.done === true,
    };
  });
}

export function localDateString(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export function isOverdue(
  task,
  today = localDateString(),
  currentTime = new Date().toTimeString().slice(0, 5),
) {
  return (
    !task.done &&
    Boolean(task.due) &&
    (task.due < today ||
      (task.due === today && Boolean(task.time) && task.time < currentTime))
  );
}

export function filterAndSortTasks(tasks, filters) {
  const query = filters.query.trim().toLocaleLowerCase();
  const filtered = tasks.filter((task) => {
    const matchesQuery =
      !query ||
      `${task.title} ${task.subject} ${task.notes}`.toLocaleLowerCase().includes(query);
    const matchesSubject = filters.subject === "All" || task.subject === filters.subject;
    const matchesStatus =
      filters.status === "All" ||
      (filters.status === "Pending" && !task.done) ||
      (filters.status === "Done" && task.done) ||
      (filters.status === "Overdue" && isOverdue(task));
    return matchesQuery && matchesSubject && matchesStatus;
  });

  return filtered.sort((a, b) => {
    if (filters.sort === "priority") {
      return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority] ||
        (a.due || "9999").localeCompare(b.due || "9999") ||
        (a.time || "").localeCompare(b.time || "");
    }
    return (a.due || "9999").localeCompare(b.due || "9999") ||
      (a.time || "").localeCompare(b.time || "");
  });
}

export function getTaskSummary(tasks, today = localDateString()) {
  const completed = tasks.filter((task) => task.done).length;
  const overdue = tasks.filter((task) => isOverdue(task, today)).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const bySubject = [...new Set(tasks.map((task) => task.subject))]
    .sort((a, b) => a.localeCompare(b))
    .map((subject) => {
      const subjectTasks = tasks.filter((task) => task.subject === subject);
      const subjectCompleted = subjectTasks.filter((task) => task.done).length;
      return {
        subject,
        total: subjectTasks.length,
        completed: subjectCompleted,
        progress: Math.round((subjectCompleted / subjectTasks.length) * 100),
      };
    });

  return {
    total: tasks.length,
    completed,
    pending: tasks.length - completed,
    overdue,
    progress,
    bySubject,
  };
}
