import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="todo-list empty">
        <p>No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
