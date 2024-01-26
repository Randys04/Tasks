import './TasksSearch.css'

function TasksSearch(){
  return(
    <input className='input-search' placeholder="Do my english homework"
    onChange={(e)=>{
      console.log("Writting in the input");
      console.log(e.target.value);
    }}
    ></input>
  );
}

export {TasksSearch}