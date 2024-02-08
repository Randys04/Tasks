import './TasksList.css'

function TasksList({children}){
  return(
    <ul>
      {children}
    </ul>
  );
}

export {TasksList}