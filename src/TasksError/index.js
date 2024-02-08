import React from 'react'
import './TasksError.css'

function TasksError(){
    return(
        <>
            <img src="/error.png" alt="trash" className='error-img' />
            <p className='error-task-msg'>There was an error!!</p>
        </>
        )
}

export {TasksError}