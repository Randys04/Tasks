import './CreateTaskButton.css'

function CreateTaskButton(){
	return(
		<button className="add-btn"
		onClick={(event) =>{
			console.log("adding new task");
			console.log(event);
		}}
		>ADD TASK</button>
	);
}

export {CreateTaskButton}