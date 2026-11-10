// Each task is an object: { id, text, done }
let tasks = load();
let filter = "all";

const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const emptyEl = document.getElementById("empty");
const countEl = document.getElementById("count");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  tasks.push({ id: Date.now(), text: text, done: false });
  input.value = "";
  save();
  render();
});

function render() {
  list.innerHTML = "";
  const visible = tasks.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done);

  visible.forEach((t) => {
    const li = document.createElement("li");
    if (t.done) li.classList.add("done");

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = t.done;
    box.addEventListener("change", () => toggle(t.id));

    const span = document.createElement("span");
    span.textContent = t.text;
    span.addEventListener("click", () => toggle(t.id));

    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "×";
    del.setAttribute("aria-label", "Delete task");
    del.addEventListener("click", () => remove(t.id));

    li.append(box, span, del);
    list.appendChild(li);
  });

  emptyEl.hidden = visible.length > 0;
  const left = tasks.filter((t) => !t.done).length;
  countEl.textContent = left + (left === 1 ? " task left" : " tasks left");
}

function toggle(id) {
  const t = tasks.find((t) => t.id === id);
  t.done = !t.done;
  save();
  render();
}

function remove(id) {
  tasks = tasks.filter((t) => t.id !== id);
  save();
  render();
}

document.getElementById("clear").addEventListener("click", () => {
  tasks = tasks.filter((t) => !t.done);
  save();
  render();
});

document.getElementById("filters").addEventListener("click", (e) => {
  if (!e.target.dataset.filter) return;
  filter = e.target.dataset.filter;
  document.querySelectorAll("#filters button").forEach((b) =>
    b.classList.toggle("on", b === e.target));
  render();
});

function save() {
  try { localStorage.setItem("todo-tasks", JSON.stringify(tasks)); } catch (e) {}
}

function load() {
  try { return JSON.parse(localStorage.getItem("todo-tasks")) || []; }
  catch (e) { return []; }
}

render();
