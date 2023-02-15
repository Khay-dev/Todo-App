
const Todo = ({ todos, removeTodo, editTodo }) => {
    return (
        <ul className="todo">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                    />
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)} >delete</button>
                    <button onClick={() => editTodo(todo.id)}>edit</button>
                </li>))}
        </ul>
    );
}

export default Todo;