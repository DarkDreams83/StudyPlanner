import assert from "node:assert/strict";
import test from "node:test";
import {
  filterAndSortTasks,
  getTaskSummary,
  isOverdue,
  parseTaskBackup,
  parseTasks,
} from "./tasks.js";

const tasks = [
  { id: "1", title: "Essay", subject: "History", due: "2026-03-10", priority: "High", notes: "", done: false },
  { id: "2", title: "Lab", subject: "Biology", due: "2026-03-12", priority: "Low", notes: "Microscope", done: true },
  { id: "3", title: "Review", subject: "History", due: "2026-03-14", priority: "Medium", notes: "", done: false },
];

test("parseTasks accepts an empty store and rejects malformed persisted data", () => {
  assert.deepEqual(parseTasks(null), []);
  assert.throws(() => parseTasks("{"), /valid JSON/);
  assert.throws(() => parseTasks("{}"), /list of tasks/);
  assert.throws(() => parseTasks('[{"id":"x"}]'), /missing required fields/);
});

test("parseTaskBackup validates and restores exported planner backups", () => {
  const restored = parseTaskBackup(JSON.stringify({ version: 1, tasks }));
  assert.deepEqual(restored.map((task) => task.id), ["1", "2", "3"]);
  assert.throws(() => parseTaskBackup("{"), /valid JSON/);
  assert.throws(
    () => parseTaskBackup(JSON.stringify({ version: 2, tasks })),
    /valid StudySprout backup/,
  );
  assert.throws(
    () =>
      parseTaskBackup(
        JSON.stringify({
          version: 1,
          tasks: [tasks[0], { ...tasks[0] }],
        }),
      ),
    /duplicate task IDs/,
  );
  assert.throws(
    () =>
      parseTaskBackup(
        JSON.stringify({
          version: 1,
          tasks: [{ ...tasks[0], title: " " }],
        }),
      ),
    /needs a title and subject/,
  );
});

test("filterAndSortTasks searches notes and applies subject, status, and priority filters", () => {
  const results = filterAndSortTasks(tasks, {
    query: "microscope",
    subject: "Biology",
    status: "Done",
    sort: "due",
  });
  assert.deepEqual(results.map((task) => task.id), ["2"]);
  assert.deepEqual(
    filterAndSortTasks(tasks, {
      query: "",
      subject: "All",
      status: "All",
      sort: "priority",
    }).map((task) => task.id),
    ["1", "3", "2"],
  );
});

test("task summary counts completed and overdue tasks by subject", () => {
  assert.equal(isOverdue(tasks[0], "2026-03-11"), true);
  assert.equal(isOverdue(tasks[1], "2026-03-11"), false);
  assert.equal(isOverdue({ due: "2026-03-11", time: "09:00", done: false }, "2026-03-11", "10:00"), true);
  assert.equal(isOverdue({ due: "2026-03-11", time: "11:00", done: false }, "2026-03-11", "10:00"), false);
  assert.deepEqual(getTaskSummary(tasks, "2026-03-11"), {
    total: 3,
    completed: 1,
    pending: 2,
    overdue: 1,
    progress: 33,
    bySubject: [
      { subject: "Biology", total: 1, completed: 1, progress: 100 },
      { subject: "History", total: 2, completed: 0, progress: 0 },
    ],
  });
});
