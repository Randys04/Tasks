import './TasksCounter.css'

function TasksCounter({total, completed}){
  return(
    <h1 className='counter'>You've completed <span className='counter counter-span counter-span-completed'>{completed}</span> of <span className='counter counter-span counter-span-incompleted'>{total}</span> tasks</h1>
  );
}

export {TasksCounter}