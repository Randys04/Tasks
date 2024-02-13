import './TasksList.css'

function TasksList({children, loading, error, emptyTasks}){
  return(
    <ul className={`${loading || error || emptyTasks ? 'without-items' : ''}`}>
      {console.log(`${loading} ${error} ${emptyTasks}`)}
      {children}
    </ul>
  );
}

export {TasksList}