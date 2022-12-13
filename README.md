- [SpiceNotes](#spicenotes)
  - [Roadmap](#roadmap)
  - [project setup](#project-setup)
    - [Init](#init)
    - [scss](#scss)
    - [eslint](#eslint)
    - [Redux Toolkit](#redux-toolkit)
    - [React Redux](#react-redux)
    - [Redux persist](#redux-persist)
  - [Themes](#themes)

# SpiceNotes

Offline WebApp which you can locally store notes and ToDo! list.
inspired by <https://todo.microsoft.com/tasks/>
The color themes are inspiried by slices of india

## Roadmap

- [ ] features
  - [ ] UX Research
  - [ ] final draft
- [ ] ui designing
  - [ ] theme color selection
  - [ ] destop
  - [ ] mobile
  - [ ] tablet
- [ ] code
  - [ ] data architecture
  - [ ] redux
  - [ ] redux persist
  - [ ] reusable scss store
  - [ ] routing
  - [ ] reusable react components
  - [ ] responsiveness
- [ ] testing

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

### Redux persist

```sh
yarn add redux-persist
```

## Themes

Themes are color plalet which maches the color of different spices.

- salt
- pepper
- red chillie
- green chillie
- lime
