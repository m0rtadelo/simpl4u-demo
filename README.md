# Simpl4u demo

Demo application showcasing the [simpl4u](https://github.com/m0rtadelo/simpl4u) framework — a modular Web Component library for building Electron and web applications.

## Purpose

This project demonstrates how to use the simpl4u library to build feature-rich applications. It includes examples of:

- **Forms** — Input components with validation (text, date, select, combobox, switch)
- **CRUD** — Full create, read, update, delete flows with `simpl-crud` and `simpl-table`
- **Kanban board** — Drag-and-drop todo management (`simpl-todo`)
- **Services** — Modal dialogs, toast notifications, spinners, progress bars, file import/export
- **Localization** — Multi-language i18n with English, Catalan, and Spanish
- **Routing** — Hash-based single-page navigation
- **Theme switching** — Light/dark mode via Bootstrap
- **State management** — Reactive model binding with `SimplModel`
- **Electron IPC** — File system persistence and native API access

## Requirements

- [Node.js](https://nodejs.org) >= 18
- npm
- [simpl4u](https://github.com/m0rtadelo/simpl4u) library (cloned as a sibling directory)

## Getting started

1. **Clone both repositories as siblings**

  ```sh
  git clone https://github.com/m0rtadelo/simpl4u.git
  git clone https://github.com/m0rtadelo/simpl4u-demo.git
  ```

2. **Install dependencies**

  ```sh
  cd simpl4u-demo
  npm i
  ```

3. **Run the demo**

  ```sh
  npm start
  ````
