import React from 'react'

const Todo = ({todo}) => {
    console.log(todo);
    return (
        <div>
            <input type="checkbox" />
            <li id={todo.id}>
                <p>{todo.task}</p>
            </li>
            <button>X</button>
        </div>
    )
}

export default Todo
