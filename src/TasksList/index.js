import './TasksList.css'

function TasksList({children, loading, error, emptyTasks}){
  return(
    <ul className={`${loading || error || emptyTasks ? 'without-items' : ''}`}>
      {children}
    </ul>
  );
}

export {TasksList}