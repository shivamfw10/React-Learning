import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo, TodoState } from '../../types';

// Async thunk for simulating API calls
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      {
        id: '1',
        text: 'Learn Redux Toolkit',
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        text: 'Build React App',
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ] as Todo[];
  }
);

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (text: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    } as Todo;
  }
);

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setFilter,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
