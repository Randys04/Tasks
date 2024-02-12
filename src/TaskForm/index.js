import React from "react";
import "./TaskForm.css";

function TaskForm(){
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <label>Adding Task</label>
            <textarea placeholder="Write a task"/>
            <div className="task-form-btns">
                <button className="task-form-btn-cancel">
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