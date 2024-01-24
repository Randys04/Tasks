import { TasksCounter } from './TasksCounter';
import { TasksSearch } from './TasksSearch';
import { TasksList } from './TasksList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton'
import './App.css';
import React from 'react';

const tasks = [
  {text : "Do my english homework", completed: false},
  {text : "Check and respond to emails", completed: true},
  {text : "Running 7 kilometres", completed: false},
  {text : "See Platzi class", completed: true},
  {text : "Prepare my breakfast", completed: false}
]

function App() {
  return (
    // crea un elemento invisible
    <React.Fragment>

      <TasksCounter completed={10} total={14} />
      <TasksSearch/>

      <TasksList>
        {tasks.map(task => (
          // necesario enviar lel atributo key
          <TaskItem key={task.text} text={task.text} completed={task.completed}/>
        ))}
      </TasksList>

      <CreateTaskButton />
    </React.Fragment>
  );
}

export default App;
