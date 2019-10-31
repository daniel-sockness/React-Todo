import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return (
        <div className="list-container">
            {props.todo.map(task => (
                <Todo
                key={task.id}
                task={task}
                toggleFinished={props.toggleFinished}
                />
            ))}
        </div>
    )
}

export default TodoList;