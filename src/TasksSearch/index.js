import React from 'react';
import './TasksSearch.css';



function TasksSearch({searchVal,setSearchVal}){

  return(
    <input className='input-search' placeholder="Do my english homework" value={searchVal}
    onChange={(e)=>{
      setSearchVal(e.target.value);
    }}
    ></input>
  );
}

export {TasksSearch}