import React, { useState } from 'react'
import { Button, Input } from '../GlobalStyles';

const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    const changeAction = (event) => {
        setTodo({
            ...todo,
            task: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (todo.task.trim()) {
            addTodo({
                ...todo,
                id: Math.floor(Math.random() * 10000)
            })

            setTodo({
                ...todo,
                task: ""
            })
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h1>Todo List 📓</h1>
            <Input
                name="task"
                type="text"
                onChange={changeAction}
                value={todo.task}
            />
            <Button type='submit'>
                Add todo
            </Button>
        </form>
    )
}

export default TodoForm
