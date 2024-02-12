import React from 'react';
import './TasksSearch.css';
import { TasksContext } from '../TasksContext';



function TasksSearch(){
  const {
    setSearchValue,
    searchValue
  } = React.useContext(TasksContext);

  return(
    <input className='input-search' placeholder="Do my english homework" value={searchValue}
    onChange={(e)=>{
      setSearchValue(e.target.value);
    }}
    ></input>
  );
}

export {TasksSearch}