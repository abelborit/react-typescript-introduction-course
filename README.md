# REACT + TYPESCRIPT (reforzamiento de react con typescript)

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- ¿Por qué es bueno usar TypeScript en mis proyectos?
- Tipos básicos
- Objetos e interfaces
- Hooks de React
  - useState
  - useEffect
  - useRef
  - useReducer
- Custom Hooks
- Genericos de TypeScript
- Axios
- Tipado de peticiones HTTP
- Formularios

### \* PASOS A REALIZAR:

1. Usaremos Bootstrap como para darle un poco de estilos a este proyecto de reforzamiento. Para esto colocar via CDN los links en el index.html
2. Crearemos una carpeta en "src" llamada "typescript" para ir colocando los conceptos que vamos avanzando.
3. Crearemos una carpeta en "src" llamada "components" para ir colocando los conceptos que vamos avanzando.
4. Para hacer peticiones HTTP usaremos axios instalándolo como dependencia: npm i axios

### \* RECURSOS A USAR:

- Bootstrap:
  - https://getbootstrap.com/
- Axios:
  - https://www.npmjs.com/package/axios
- React Hook Form (se puede usar para los formularios):
  - https://react-hook-form.com/

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
