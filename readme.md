# React Typescript Boilerplate

Minimal React usring Typescript

## Motivation

**React** is great UI library for web development. In previous, I use **ES6** for its languange, but it is hard to maintain, because there is much data and state that is alive in application. I have to guess what is type of props in one component? how many props does the component have? Front end will be larger and more complicated as time goes by. And.. **Typescript** save your live! Happy coding!

## Tools

- Language: `typescript`
- Routing: `react-router-dom`
- Fetch API: `axios`
- Async handler: `rxjs@6`
- State management: `redux-observable`
- Styling: `styled-component`
- Grid layout: `bootstrap-4-grid`
- Animation: `css` and `rxjs` (WIP)
- Bundler: `webpack@4`
- Form & Validation: `formik` and `yup`

## Project Structure

```bash
src
├── app.tsx       # main file in this project.
├── assets        # assets like images, icons, fonts, etc.
├── components    # Components like Button, Input, etc.
├── constants     # Constanst of app.
├── containers    # Contaiers like RegisterForm, LoginModal, UserHeader, etc.
├── interfaces    # Define interface of object like API, Service, Common Interface
├── libs          # libs of this app.
├── pages         # Pages based on definition of routes.
├── routers       # Setup react-router-dom and kind of routes (public & private).
├── services      # Services of App like apiService, userService, loginService, etc.
└── styles        # Styling using styled-components: GlobalStyle & theme.
└── types         # Declare custom types here
└── store         # Redux definitions
    └── actions   # Redux actions
    └── epics     # Epics by redux-observable
    └── reducers  # Redux reducers
    └── types.ts  # All action types
    └── index.ts  # Root of store
```
