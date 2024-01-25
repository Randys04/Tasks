import { TasksCounter } from './TasksCounter';
import { TasksSearch } from './TasksSearch';
import { TasksList } from './TasksList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton'
import { TasksTitle } from './TasksTitle';
import React from 'react';

const tasks = [
  {text : "Do my english homework", completed: false},
  {text : "Check and respond to emails", completed: true},
  {text : "Running 7 kilometres", completed: false},
  {text : "See Platzi class", completed: true},
  {text : "Prepare my breakfast", completed: false},
  {text : "Do my english homework", completed: false},
  {text : "Check and respond to emails", completed: true},
  
]

function App() {
  return (
    // crea un elemento invisible
    <>

      <TasksTitle/>
      <TasksCounter completed={10} total={14} />
      <TasksSearch/>

      <TasksList>
        {tasks.map(task => (
          // necesario enviar lel atributo key
          <TaskItem key={task.text} text={task.text} completed={task.completed}/>
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