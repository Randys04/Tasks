import { TasksCounter } from './TasksCounter';
import { TasksSearch } from './TasksSearch';
import { TasksList } from './TasksList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton'
import './App.css';

function App() {
  return (
    <div className="App">

      <TasksCounter />
      <TasksSearch/>

      <TasksList>
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </TasksList>

      <CreateTaskButton />
    </div>
  );
}

export default App;
