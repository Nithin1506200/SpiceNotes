- [SpiceNotes](#spicenotes)
  - [project setup](#project-setup)
    - [Init](#init)
    - [scss](#scss)
    - [eslint](#eslint)
    - [Redux Toolkit](#redux-toolkit)
    - [React Redux](#react-redux)

# SpiceNotes

Ofline app which you can add notes and ToDo! list.

## project setup

- vite.js
- react
- typescript
- eslint
- scss
- redux
- redux saga
- local storage

### Init

---

- use vite.js
- use typescript

```sh
npm create vite@latest
```

or

```sh
yarn create vite
```

select name `spice_notes_ui`
select `react/typescript`

```sh
cd spice_notes_ui
```

### scss

---

```sh
yarn add -D sass
```

### eslint

---

```sh
 yarn add eslint --dev
 yarn run eslint --init
```

add typescript config to eslint
eslint.json

```json
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["tsconfig.json", "tsconfig.node.json"]
  },
```

setup some common rules

```json
  "rules": {
    "no-extra-semi": "off",
    "quotes": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": "off",
    "eslint-disable-next-line": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint.io/rules/space-before-function-paren": "off"
  }
```

### Redux Toolkit

```sh
yarn add @reduxjs/toolkit
```

### React Redux

```sh
yarn add react-redux
```
