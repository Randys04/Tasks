import React from 'react';
import { TasksProvider } from '../TasksContext';
import { AppUI } from './appUI';


function App() {
  return(
    <TasksProvider>
      <AppUI />
    </TasksProvider>
    
  )
}

export default App;

/*
links paletas de colroes
--https://paletadecolores.com.mx/paleta/ffffff/a1c1be/59554e/f3f4e5/e2e3d9/

*/