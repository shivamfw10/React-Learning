# React useState Practice Examples (Vite + React)

This project is a collection of practical React examples demonstrating the use of the `useState` hook. Each example is implemented as a separate component and folder, making it easy to learn and experiment with state management in React. The app is built with Vite and React + TypeScript.

## How to Create This App

To create a new Vite + React app, run:

```bash
npm create vite@latest rl-03-usestate-practive -- --template react-ts
```

## How to Run the Project

1. Navigate to the project directory:
   ```bash
   cd rl-03-usestate-practive
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

## Practice Examples & Folder Structure

Each folder in `src/` contains a focused example of using `useState`:

- [`01_Counter/`](src/01_Counter/counter.tsx): **Counter**
  - A simple counter app using `useState` to increment and decrement a value. Shows how to update state and re-render UI.
- [`02_Toggle_Button/`](src/02_Toggle_Button/toggleButton.tsx): **Toggle Button**
  - A button that toggles between ON/OFF states using `useState`. Demonstrates boolean state toggling and dynamic styling.
- [`03_Userform/`](src/03_Userform/userform.tsx): **User Input Form**
  - Captures user input and displays a greeting using `useState`. Shows how to handle form input and display dynamic content.
- [`04_Color_Picker/`](src/04_Color_Picker/colorpicker.tsx): **Color Picker**
  - Lets users pick a color and displays the selected color using `useState`. Demonstrates controlled input and live preview.
- [`05_Todo_List/`](src/05_Todo_List/todolist.tsx): **Todo List**
  - Add and remove todos with a dynamic list managed by `useState`. Shows array state management and list rendering.
- [`06_CharacterCounter/`](src/06_CharacterCounter/character-counter.tsx): **Character Counter**
  - Counts and displays the number of characters typed in a textarea. Demonstrates string state and live feedback.
- [`07_Image_Carousel/`](src/07_Image_Carousel/image-carousel.tsx): **Image Carousel**
  - Cycle through images with navigation buttons using `useState`. Shows how to manage index state and display images.
- [`08_Dynamic-Dropdown/`](src/08_Dynamic-Dropdown/dynamic-dropdown.tsx): **Dynamic Dropdown**
  - Select a country and see cities update dynamically in a second dropdown. Demonstrates dependent dropdowns and state-driven UI.
- [`09_Error_handling/`](src/09_Error_handling/error-handling.tsx): **Login Form with Error Handling**
  - Displays error/success messages based on login credentials using `useState`. Shows conditional rendering and form validation.
- [`10_Pagination/`](src/10_Pagination/pagination.tsx): **Pagination**
  - Paginate through a list of items, controlling the current page with `useState`. Demonstrates page navigation and slicing arrays.
- [`11_Chat-App/`](src/11_Chat-App/chat-app.tsx): **Chat App**
  - A simple chat interface where messages are managed with `useState` (single user/session only). Shows array state and message rendering.

## Customization
You can extend each example, add new features, or update styles in the `src/` folder to further practice React state management.

---

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

Created with Vite, React, and TypeScript.
