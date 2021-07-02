import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { GlobalApp } from './GlobalStyles';

function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo,...todos]);
  }

  return (
    <GlobalApp>
      <TodoForm  addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </GlobalApp>
  );
}

export default App;
