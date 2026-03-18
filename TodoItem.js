import React from 'react';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="todo-checkbox"
        />
        <span className="todo-text">{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
