// App.js
import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px', cursor: 'pointer' }}>
          Add Todo
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
            <span>{todo}</span>
            <button
              className="delete-btn"
              onClick={() => removeTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
