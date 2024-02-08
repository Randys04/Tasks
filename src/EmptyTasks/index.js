import React from 'react'
import './EmptyTasks.css'

function EmptyTasks(){
    return(
        <>
            <img  src="/list.png" alt="trash" />
            <p className='create-task-msg'>Create a new task</p>
        </>
    )
}

export {EmptyTasks}