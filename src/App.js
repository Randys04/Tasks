import { TasksCounter } from './TasksCounter';
import { TasksSearch } from './TasksSearch';
import { TasksList } from './TasksList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton'
import { TasksTitle } from './TasksTitle';
import React from 'react';

const tasksDefault = [
  {text : "Do my english homework", completed: false},
  {text : "Check and respond to emails", completed: false},
  {text : "Running 7 kilometres", completed: false},
  {text : "See Platzi class", completed: false},
  {text : "Prepare my breakfast", completed: false},
  {text : "Do my maths homework", completed: false},
  {text : "Wash my car", completed: false},
  {text : "See the match", completed: false},
]


function App() {

  // Estado de las tasks
  const [tasks, setTasks] = React.useState(tasksDefault);

  // Estado del componente TasksSearch
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  // Estados derivados
  const tasksCompleted = tasks.filter(task => task.completed).length;
  const tasksTotal = tasks.length;

  const searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(searchedTasks);

  // funcionalidad para marcar una task como completada
  const finishTask = (textKey) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.text === textKey)
    
    if(newTasks[taskIndex].completed){
      newTasks[taskIndex].completed = false;
    }else{
      newTasks[taskIndex].completed = true;
    }
    console.log(newTasks[taskIndex].completed )
    setTasks(newTasks);
  }

  const deleteTask = (textKey) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.text === textKey)
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  }

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
            setTasks={setTasks}
            onCompleted={() => finishTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TasksList>

      <CreateTaskButton />
    </>
  );
}

export default App;

/*
links paletas de colroes
--https://paletadecolores.com.mx/paleta/ffffff/a1c1be/59554e/f3f4e5/e2e3d9/

*/