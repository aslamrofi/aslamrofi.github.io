# aslamrofi.github.io

Personal portfolio — built with plain HTML/CSS/JS in a client-side MVC pattern,
hosted on GitHub Pages.

## Structure

```
index.html            entry point / view shell
css/style.css          all styling (design tokens at the top)
js/app.js              bootstraps the app, wires MVC pieces together
js/models/              data layer (ProfileModel, ProjectModel, CTFModel)
js/views/                rendering layer (turns data into DOM/HTML)
js/controllers/          glue layer (fetches via model, calls view.render)
data/projects.json     your project list
data/ctf.json           your CTF log
```

## Editing content (no code required)

- **Add a project** → open `data/projects.json`, copy an existing object, edit
  `title`, `description`, `tags`, `repo`, `demo`.
- **Add a CTF** → open `data/ctf.json`, copy an existing object, edit `name`,
  `date`, `team`, `rank`, `categories`, `writeup`. New entries automatically
  sort to the top (most recent first) and appear as a card in the grid.
- **Update your bio/skills** → edit `js/models/ProfileModel.js` directly.

## Running locally

Because the site uses `fetch()` to load the JSON files, opening `index.html`
directly from disk (`file://`) will fail in most browsers due to CORS. Run a
local server instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

Push to the `main` branch of this repo (`aslamrofi.github.io`). Since this is
a *user site* repo, GitHub Pages serves it automatically at
`https://aslamrofi.github.io/` — no settings or build step needed, as long as
`index.html` stays in the root.
