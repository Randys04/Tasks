import { TasksCounter } from '../TasksCounter';
import { TasksSearch } from '../TasksSearch';
import { TasksList } from '../TasksList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton'
import { TasksTitle } from '../TasksTitle';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError'
import { EmptyTasks } from '../EmptyTasks';
import { TasksContext } from '../TasksContext';

function AppUI(){
  return (
    // crea un elemento invisible 
    <>
      <TasksTitle/>
      <TasksCounter />
      <TasksSearch />

      <TasksContext.Consumer>
        {({
          searchedTasks,
          finishTask,
          deleteTask,
          loading,
          error
        })=>(<TasksList>
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
        </TasksList>)}
      </TasksContext.Consumer>
        

      <CreateTaskButton />
    </>
  );
}

export {AppUI}