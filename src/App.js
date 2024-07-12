import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center" style={{color:'white'}}>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
