import React from 'react'
import { ListItem , ListContainer} from '../GlobalStyles';

const colors = ['purple' , 'pink' , 'green' , 'black' , 'violet'];

const Todo = ({todo}) => {
    console.log(todo);
    return (
        <ListContainer 
            
        >
            <input type="checkbox" />
            <ListItem id={todo.id}>
                <h4>{todo.task}</h4>
            </ListItem>
            <button>X</button>
        </ListContainer>
    )
}

export default Todo
