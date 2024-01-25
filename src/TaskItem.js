import './TaskItem.css'

function TaskItem(props){
    return(
      <li>
        <input className='item-options' type='checkbox'></input>
        <p>{props.text}</p>
        <button className='item-options'>
          <img  src="/trash.png" alt="trash" />
        </button>
      </li>
    );
}

export {TaskItem}