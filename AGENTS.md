# simpl4u-demo

Demo app for the [simpl4u](https://github.com/m0rtadelo/simpl4u) Web Component framework.

## Setup

- Clone both repos as siblings: `simpl4u` and `simpl4u-demo` in the same parent directory. All imports reference `../../simpl4u/...` — it is **not** an npm dependency.
- `npm install` (only devDeps: eslint, electron)
- `npm start` → runs `electron ./main.js`

## Architecture

- **No bundler** — native ES modules, import maps, plain `<script type="module">`.
- **Two run modes**: Electron (`npm start`) or browser (serve `index.html` or open file directly). Use `api-electron.js` vs `api-browser.js` to switch the `window.api` adapter.
- **Entrypoints**: `main.js` (Electron main process) → `index.html` → `index.js` (imports all components + `../simpl4u/index.js`).
- **Routing**: hash-based via `RouterService` from simpl4u.
- **i18n**: `assets/i18n/{ca,en,es}.js` — loaded in `my-app.js` via `LanguageService.set()`.
- **Components** under `components/` — plain Web Components extending `StaticElement` from simpl4u.
- **Services** under `services/` — thin wrappers around simpl4u services (storage, remote, todo).
- **Storage abstraction** in `my-storage.service.js` supports `application` (local) and `remote` modes.

## Commands

| Command | Action |
|---------|--------|
| `npm start` | Launch Electron app |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint auto-fix |

No test, build, or typecheck commands exist.

## Code conventions

- **ESLint flat config** in `eslint.config.mjs` — 2-space indent, single quotes, semicolons, unix line endings.
- No TypeScript. JSDoc `@typedef` used sparingly for imported types.
- `index.js` has `/* eslint-disable no-unused-vars */` because imports register custom elements without direct use.
- CSS: Bootstrap via simpl4u's bundled `bootstrap.min.css`. Theme switching via `data-bs-theme` on `<html>`.
