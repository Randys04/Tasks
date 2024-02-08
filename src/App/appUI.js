import { TasksCounter } from '../TasksCounter';
import { TasksSearch } from '../TasksSearch';
import { TasksList } from '../TasksList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton'
import { TasksTitle } from '../TasksTitle';

function AppUI({
  tasksCompleted,
  tasksTotal,
  searchValue,
  setSearchValue,
  searchedTasks,
  finishTask,
  deleteTask
}){
  return (
    // crea un elemento invisible 
    <>

      <TasksTitle/>
      <TasksCounter completed={tasksCompleted} total={tasksTotal} />
      <TasksSearch
        searchVal={searchValue} // Se le puede colocar el mismo nombre, Ej: searchValue={searchValue}
        setSearchVal={setSearchValue}
      />

      <TasksList>
        {searchedTasks.map(task => (
          // necesario enviar lel atributo key
          <TaskItem
            key={task.text} 
            text={task.text} 
            completed={task.completed}
            onCompleted={() => finishTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TasksList>

      <CreateTaskButton />
    </>
  );
}

export {AppUI}