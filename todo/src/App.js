import './App.css';
import { useState } from 'react';
import MainTodo from './Main';
import Todo from './Todo';




function App() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState(null)
  

  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: crypto.randomUUID() }];
    setTodos(newTodos);

  };
  const removeTodo = id => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  }

  const editTodo = (value) => {
    const _todos = todos.concat([]); // clone
    const index = _todos.findIndex(todo => todo.id === item.id)
    if (index === -1) return;

    _todos[index] = {
      text: value,
      id: item.id
    };

    setItem(null);
    setTodos(_todos)
  }

  
  return (
    <div className='App'>
      <h1>TODO LIST</h1>

      <MainTodo
        value={item?.text ?? ""}
        onSubmit={(text) => {
          !item ? addTodo(text) : editTodo(text)
        }}
      />
      <div>

        <Todo
          todos={todos}
          removeTodo={removeTodo}
          editTodo={(todoId) => {
            setItem(todos.find(e => e.id === todoId));
          }}
        />


      </div>
    </div>
  );
}

export default App;
