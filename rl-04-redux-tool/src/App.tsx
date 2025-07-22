import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="app">
      <h1>Redux Toolkit Demo</h1>
      <div className="app-content">
        <Counter />
        <TodoList />
      </div>
    </div>
  )
}

export default App
