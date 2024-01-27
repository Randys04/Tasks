import React from 'react';
import './TasksSearch.css';



function TasksSearch(){
  const [searchValue, setSearchValue] = React.useState('');


  return(
    <input className='input-search' placeholder="Do my english homework" value={searchValue}
    onChange={(e)=>{
      console.log("Writting in the input");
      console.log(e.target.value);
      setSearchValue(e.target.value);
    }}
    ></input>
  );
}

export {TasksSearch}