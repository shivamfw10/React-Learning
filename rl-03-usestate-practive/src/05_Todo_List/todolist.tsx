import "./todolist.css";
import "../style.css"

import { useState } from "react";

interface Todo {
  id: string;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { id: crypto.randomUUID(), text: input.trim() }]);
      setInput("");
    }
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="section-box">
      <h2>Todo List</h2>
      <p>Build a simple to-do list using the useState hook to add and remove items.</p>
      <div className="todo-container">
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.length === 0 && <li className="empty">No todos yet.</li>}
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button className="remove-btn" onClick={() => handleRemoveTodo(todo.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;