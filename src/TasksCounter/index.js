import React from 'react';
import './TasksCounter.css'
import { TasksContext } from '../TasksContext';

function TasksCounter(){
  const {
    tasksTotal,
    tasksCompleted
  } = React.useContext(TasksContext);
  return(
    <h1 className='counter'>You've completed <span className='counter counter-span counter-span-completed'>{tasksCompleted}</span> of <span className='counter counter-span counter-span-incompleted'>{tasksTotal}</span> tasks</h1>
  );
}

export {TasksCounter}