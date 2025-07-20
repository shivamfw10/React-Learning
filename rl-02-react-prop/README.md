# React Prop Concepts & Reusable Components (Vite + React)

This project demonstrates key React concepts such as props, reusable components, and dynamic rendering using mock data. The app is built with Vite and React + TypeScript, and showcases how to structure a scalable React application.

## How to Create This App

To create a new Vite + React app, run:

```bash
npm create vite@latest rl-02-react-prop -- --template react-ts
```

## How to Run the Project

1. Navigate to the project directory:
   ```bash
   cd rl-02-react-prop
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## What This Project Covers
- **Reusable Components:** Button, Card, Header, TabButton, and CoreConcept are implemented as reusable components.
- **React Props:** Components receive data via props, making them flexible and configurable.
- **Mock Data:** Core concepts are rendered dynamically from mock data (`coreconceptdata.ts`).
- **Component Structure:** Demonstrates best practices for organizing components and mock data in a React project.
- **Dynamic Rendering:** Uses `.map()` to render lists of components from data arrays.

## Example Features
- Dynamic list of core React concepts (with images, titles, and descriptions)
- Reusable UI elements (Button, Card, TabButton)
- Header component with random description
- Organized folder structure for scalability

## Folder Structure
- `src/components/` - Reusable UI components
- `src/mock-data/` - Mock data for dynamic rendering
- `src/assets/` - Images and static assets

## Customization
You can extend the app by adding more components, updating mock data, or customizing styles in the `src/` folder.

---

Created with Vite, React, and TypeScript.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
