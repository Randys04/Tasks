import './TaskItem.css'

function TaskItem(props){
    return(
      <li className={`${props.completed && "li-completed"}`}>
        <input 
        className='item-options input-completed' 
        type='checkbox' 
        defaultChecked={props.completed}
        onClick={props.onCompleted}
        ></input>
        <p className={`${props.completed && "p-completed"}`}>{props.text}</p>
        <button className='item-options'
        onClick={props.onDelete}
        >
          <img  src="/trash.png" alt="trash" />
        </button>
      </li>
    ); 
}

export {TaskItem}