import React from "react";
import "./TaskForm.css";
import { TasksContext } from "../TasksContext";

function TaskForm(){
    const {
        addNewTask,
        setAddTask,
    } = React.useContext(TasksContext);

    const[newTask, setNewTask] = React.useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        addNewTask(newTask);
        setAddTask(false);
    }

    const onCancel = ()=>{
        setAddTask(false);
    }

    const onChange = (e)=>{
        setNewTask(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Adding Task</label>
            <textarea 
                placeholder="Write a task"
                value={newTask}
                onChange={onChange}
            />
            <div className="task-form-btns">
                <button type="button" className="task-form-btn-cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button type="submit" className="task-form-btn-add">
                    Add
                </button>
            </div>
        </form>
    );
}

export {TaskForm}