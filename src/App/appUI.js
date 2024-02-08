import { TasksCounter } from '../TasksCounter';
import { TasksSearch } from '../TasksSearch';
import { TasksList } from '../TasksList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton'
import { TasksTitle } from '../TasksTitle';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError'
import { EmptyTasks } from '../EmptyTasks';

function AppUI({
  tasksCompleted,
  tasksTotal,
  searchValue,
  setSearchValue,
  searchedTasks,
  finishTask,
  deleteTask,
  loading,
  error
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
        {loading && <TasksLoading/>}
        {error && <TasksError/>}
        {(!loading && searchedTasks.length === 0) && <EmptyTasks/>}

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