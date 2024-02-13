import { TasksCounter } from '../TasksCounter';
import { TasksSearch } from '../TasksSearch';
import { TasksList } from '../TasksList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton'
import { TasksTitle } from '../TasksTitle';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError'
import { EmptyTasks } from '../EmptyTasks';
import { TaskForm } from '../TaskForm';
import { TasksContext } from '../TasksContext';
import { Modal } from '../Modal';
import React from 'react';

function AppUI(){
  const {
    searchedTasks,
    finishTask,
    deleteTask,
    loading,
    error,
    addTask
  } = React.useContext(TasksContext);
  return (
    // crea un elemento invisible 
    <>
      <TasksTitle/>
      <TasksCounter />
      <TasksSearch />

      <TasksList
        loading={loading}
        error={error}
        emptyTasks={(!loading && searchedTasks.length === 0)}
      >
        
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
      {addTask && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
    </>
  );
}

export {AppUI}