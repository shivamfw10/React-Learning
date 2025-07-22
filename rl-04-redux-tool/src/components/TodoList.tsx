import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setFilter,
  clearCompleted,
  fetchTodos,
  addTodoAsync,
} from '../store/slices/todoSlice';
import type { Todo } from '../types';
import './TodoList.css';

const TodoList = () => {
  const { todos, filter } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    // Fetch todos on component mount
    dispatch(fetchTodos());
  }, [dispatch]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleAddTodoAsync = () => {
    if (newTodo.trim()) {
      dispatch(addTodoAsync(newTodo));
      setNewTodo('');
    }
  };

  const handleEditStart = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id: string) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
    }
    setEditingId(null);
    setEditText('');
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleAddTodoAsync} className="async-btn">
          Add Async
        </button>
      </div>

      <div className="todo-filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => dispatch(setFilter('all'))}
        >
          All ({todos.length})
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => dispatch(setFilter('active'))}
        >
          Active ({todos.filter(t => !t.completed).length})
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => dispatch(setFilter('completed'))}
        >
          Completed ({todos.filter(t => t.completed).length})
        </button>
        <button onClick={() => dispatch(clearCompleted())} className="clear-btn">
          Clear Completed
        </button>
      </div>

      <div className="todos">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            
            {editingId === todo.id ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleEditSave(todo.id)}
                />
                <button onClick={() => handleEditSave(todo.id)}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </div>
            ) : (
              <div className="todo-content">
                <span className="todo-text">{todo.text}</span>
                <div className="todo-actions">
                  <button onClick={() => handleEditStart(todo)}>Edit</button>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTodos.length === 0 && (
        <p className="no-todos">No todos found for the current filter.</p>
      )}
    </div>
  );
};

export default TodoList;
