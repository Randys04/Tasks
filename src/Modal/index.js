import React from "react";
import ReactDOM from "react-dom";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="add-task">
            {children}
        </div>,
        document.getElementById('modal-add-task')
    )
}

export {Modal};