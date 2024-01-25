import './TasksCounter.css'

function TasksCounter({total, completed}){
  return(
    <h1 className='counter'>You've completed {completed} of {total} tasks</h1>
  );
}

export {TasksCounter}