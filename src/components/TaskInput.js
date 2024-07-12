import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
