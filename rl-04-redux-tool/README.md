# Redux Toolkit Demo

This project demonstrates a complete Redux Toolkit setup with TypeScript, including:

## Features Implemented

### 🏪 Store Configuration
- **Store Setup**: Configured with `configureStore` from Redux Toolkit
- **Typed Hooks**: Custom typed `useAppDispatch` and `useAppSelector` hooks
- **DevTools**: Redux DevTools integration enabled in development

### 🔧 Slices
- **Counter Slice**: Basic counter with increment, decrement, incrementByAmount, and reset actions
- **Todo Slice**: Full CRUD operations for todos with filtering capabilities

### 🎯 Middleware
- **Custom Logger**: Logs all actions and state changes to console
- **Redux Thunk**: Built-in async action support for API calls

### 🧩 Components
- **Counter Component**: 
  - Uses `useSelector` and `useDispatch`
  - Demonstrates basic state management
  - Increment/decrement with custom amounts
  
- **TodoList Component**:
  - Full todo management (add, edit, delete, toggle)
  - Filtering (all, active, completed)
  - Async actions with loading states
  - Local state for editing mode

### 📁 Project Structure
```
src/
├── components/           # React components
│   ├── Counter.tsx
│   ├── Counter.css
│   ├── TodoList.tsx
│   └── TodoList.css
├── store/               # Redux store configuration
│   ├── index.ts         # Store setup
│   ├── slices/          # Redux slices
│   │   ├── counterSlice.ts
│   │   └── todoSlice.ts
│   └── middleware/      # Custom middleware
│       └── logger.ts
├── hooks/               # Custom hooks
│   └── redux.ts         # Typed Redux hooks
├── types/               # TypeScript types
│   └── index.ts
└── App.tsx              # Main app component
```

## Key Redux Concepts Demonstrated

### 1. **useSelector**
```typescript
const count = useAppSelector((state) => state.counter.value);
const todos = useAppSelector((state) => state.todos.todos);
```

### 2. **useDispatch**
```typescript
const dispatch = useAppDispatch();
dispatch(increment());
dispatch(addTodo('New todo'));
```

### 3. **Async Actions (Thunks)**
```typescript
// Async action for fetching todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockTodos;
  }
);
```

### 4. **Custom Middleware**
- Logger middleware that logs every action and state change
- Demonstrates how to create and configure custom middleware

### 5. **TypeScript Integration**
- Fully typed store with `RootState` and `AppDispatch`
- Type-safe selectors and actions
- Proper typing for async thunks

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the development server URL

## Testing the Features

1. **Counter**: Use the increment/decrement buttons and try the custom amount feature
2. **Todos**: 
   - Add new todos (both sync and async)
   - Edit todos by clicking the edit button
   - Toggle completion status
   - Filter todos by status
   - Clear completed todos

3. **Redux DevTools**: Open browser dev tools and check the Redux tab to see:
   - Action history
   - State changes
   - Time travel debugging

4. **Console Logging**: Check the browser console to see the custom logger middleware in action

## Dependencies

- `@reduxjs/toolkit`: Modern Redux with less boilerplate
- `react-redux`: React bindings for Redux
- `react`: UI library
- `typescript`: Type safety

This setup provides a solid foundation for building larger React applications with Redux Toolkit!

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
