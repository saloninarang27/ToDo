import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    const newTask = prompt("Edit your task", tasks.find(task => task.id === id).name);
    if (newTask !== null) {
      dispatch(editTask(id, newTask));
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}>
          <span style={{ textDecoration: task.completed ? '' : 'none' }}>
            {task.name}
          </span>
          <div>
            <button className="btn btn-success me-2" onClick={() => handleToggle(task.id)}>
              {task.completed ? 'Completed' : 'Not Complete'}
            </button>
            <button className="btn btn-secondary me-2" onClick={() => handleEdit(task.id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
