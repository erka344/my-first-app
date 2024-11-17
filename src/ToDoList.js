import React, { useState } from 'react';

function ToDoList({ tasks }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const markAsCompleted = (task) => {
    setCompletedTasks([...completedTasks, task]);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: completedTasks.includes(task) ? 'line-through' : 'none' }}>
            {task} 
            <button onClick={() => markAsCompleted(task)}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;