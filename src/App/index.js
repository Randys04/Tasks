import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './appUI';


function App() {

  // Estado de las tasks
  const {
    item: tasks, 
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TASKS_V1', []);

  // Estado del componente TasksSearch
  const [searchValue, setSearchValue] = React.useState('');
  

  // Estados derivados
  const tasksCompleted = tasks.filter(task => task.completed).length;
  const tasksTotal = tasks.length;

  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));

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
  
  return(
    <AppUI
    tasksCompleted = {tasksCompleted}
    tasksTotal = {tasksTotal}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTasks = {searchedTasks}
    finishTask = {finishTask}
    deleteTask = {deleteTask}
    loading = {loading}
    error = {error}
  />
  )
}

export default App;

/*
links paletas de colroes
--https://paletadecolores.com.mx/paleta/ffffff/a1c1be/59554e/f3f4e5/e2e3d9/

*/