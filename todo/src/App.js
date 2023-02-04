import './App.css';
import { useState } from 'react';
import MainTodo from './Main';
import Todo from './Todo';



function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: crypto.randomUUID() } ];
    setTodos(newTodos);
  };
  return (
    <div className='App'>
      <h1>TODO LIST</h1>

      <MainTodo addTodo={addTodo} />
      <div>
        {
          todos.map((item) => (
            
            <Todo
              todos={item}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
