function TasksCounter({total, completed}){
  return(
    <h1>You have completed {completed} of {total} tasks</h1>
  );
}

export {TasksCounter}