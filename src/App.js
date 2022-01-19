import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  function addTodo() {
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Top Secret ToDO
        </p>

        <div>
          <input type="text" value={todo} onChange={e => setTodo(e.target.value)} className="input" placeholder="What you want to do?" />
          <button className="btn" onClick={addTodo}>Add</button>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" />
                  {todo}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
