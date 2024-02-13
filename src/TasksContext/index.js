import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TasksContext = React.createContext();

function TasksProvider({children}){
   // Estado de las tasks
  const {
    item: tasks, 
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TASKS_V1', []);

  // Estado del componente TasksSearch
  const [searchValue, setSearchValue] = React.useState('');

  // Estado para la funcionalidad de anadir tasks
  const [addTask, setAddTask] = React.useState(false);

  // Estados derivados
  const tasksCompleted = tasks.filter(task => task.completed).length;
  const tasksTotal = tasks.length;

  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));

  const addNewTask = (text)=>{
    const newTasks = [...tasks];
    newTasks.push({
      text,
      completed: false,
    });
    saveTasks(newTasks);
  }

  // funcionalidad para marcar una task como completada
  const finishTask = (textKey) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.text === textKey)
    
    if(newTasks[taskIndex].completed){
      newTasks[taskIndex].completed = false;
    }else{
      newTasks[taskIndex].completed = true;
    }
    saveTasks(newTasks);
  }

  const deleteTask = (textKey) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.text === textKey)
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  }
  return (
    <TasksContext.Provider value={{
      tasksCompleted,
      tasksTotal,
      searchValue,
      setSearchValue,
      searchedTasks,
      finishTask,
      deleteTask,
      loading,
      error,
      setAddTask, //bool para saber si mostrar o no el Modal
      addTask,
      addNewTask,
    }}>
      {children}
    </TasksContext.Provider>
  )
}

export {TasksContext, TasksProvider}