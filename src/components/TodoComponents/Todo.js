import React from 'react';
import style from './Todo.css';
const Todo = props => {

    const handleClick = () => {
        props.toggleFinished(props.task.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.task.completed ? ' finished' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;