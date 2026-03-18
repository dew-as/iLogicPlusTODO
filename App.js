import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Generate unique ID
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Add new task
  const addTask = () => {
    if (input.trim() === '') {
      alert('Please enter a task');
      return;
    }
    const newTask = {
      id: generateId(),
      text: input,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Calculate stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="app-container">
      <h1>My TODO App</h1>
      
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          className="todo-input"
        />
        <button onClick={addTask} className="add-btn">
          Add Task
        </button>
      </div>

      <div className="stats">
        <p>Total Tasks: <span>{totalTasks}</span></p>
        <p>Completed: <span>{completedTasks}</span></p>
      </div>

      <TodoList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
