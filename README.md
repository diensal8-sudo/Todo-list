# To-Do List

A to-do list app built from scratch with **HTML, CSS and JavaScript**. No libraries, no frameworks.

> 🎮 **Try it:** add your GitHub Pages link here (`https://your-name.github.io/todo-list/`)

Part of the *Feral Frame Studio* series: small projects built step by step.

## How to use it

- Type a task and press **Enter** (or the **Add** button).
- Click the checkbox, or the text, to mark a task as **done**. Click again to undo.
- Press **×** to delete a task.
- Filters: **All**, **Active**, **Done**.
- The counter shows how many tasks are left. **Clear done** removes all finished tasks.
- Your tasks are **saved in the browser**: close the page, open it again, they are still there.
- Works on **phones** too.

## The files

| File | What it does |
|---|---|
| `index.html` | Title, the form, the filters, the list and the footer |
| `style.css` | The look: dark card, green accents, crossed-out done tasks |
| `script.js` | The tasks and all the logic |

## The main ideas

**1. The tasks are data.** A list of objects. Each one has an `id`, the `text` and a `done` flag:

```js
let tasks = [{ id: 1, text: "Buy milk", done: false }];
```

**2. Adding a task.** The form listens for `submit`. We read the text, ignore empty ones, `push` a new object into the list, and draw the list again.

**3. One function draws everything.** `render()` empties the list and creates one `<li>` for each visible task with `document.createElement`. Whenever the data changes, we call `render()` again. The page always shows the data.

**4. Complete and delete.** Each task has an `id`. `toggle(id)` flips `done`. `remove(id)` uses `filter` to keep every task except that one.

**5. Filters and counter.** The filter is just a variable (`"all"`, `"active"` or `"done"`). `render()` shows only the tasks that match. The counter counts the tasks that are not done.

**6. Saving.** After every change we call `save()`, which stores the list in `localStorage` as text (`JSON.stringify`). When the page opens, `load()` reads it back (`JSON.parse`). Both are wrapped in `try/catch`, so the app still works if the browser blocks storage.

## Publish it for free (GitHub Pages)

1. Create a **public** repository on GitHub (for example `todo-list`).
2. Upload `index.html`, `style.css` and `script.js`.
3. **Settings → Pages**, choose branch `main` and folder `/ (root)`, press **Save**.
4. Wait a minute or two: your link appears. Paste it at the top of this README and in the repository **About → Website**.

## Make it yours

- Add a due date or a priority to each task object.
- Add an "Edit" button (double click on the text).
- Change the colors in `style.css`.

---

## In italiano

Una lista di cose da fare creata da zero con **HTML, CSS e JavaScript**, senza librerie.

- Scrivi un'attività e premi **Invio**. Clicca la casella per segnarla come fatta, **×** per cancellarla.
- Filtri: Tutte, Attive, Fatte. Il contatore mostra quante ne mancano.
- Le attività restano **salvate nel browser** (`localStorage`).
- **Idea principale:** le attività sono dati (una lista di oggetti) e una sola funzione, `render()`, ridisegna la lista ogni volta che i dati cambiano.
- Funziona anche da **telefono**. Per pubblicarla gratis usa GitHub Pages (passi sopra).
