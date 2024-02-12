import React from 'react';
import { TasksContext } from '../TasksContext';
import './CreateTaskButton.css'

function CreateTaskButton(){
	const {
		addTask,
		setAddTask,
	} = React.useContext(TasksContext);
	return(
		<button className="add-btn"
		onClick={()=>{
			if(addTask){
				setAddTask(false);
			}else{
				setAddTask(true);
			}
		}}
		>ADD TASK</button>
	);
}

export {CreateTaskButton}