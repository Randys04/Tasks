import './TaskItem.css'

function TaskItem(props){
    return(
      <li>
        <input className='item-options input-completed' type='checkbox' checked={props.completed}></input>
        <p className={`${props.completed && "p-completed"}`}>{props.text}</p>
        <button className='item-options'>
          <img  src="/trash.png" alt="trash" />
        </button>
      </li>
    );
}

export {TaskItem}