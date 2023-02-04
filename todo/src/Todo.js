
const Todo = ({ todos }) => {
    return (
        <ul className="todo">
            <li>
                <span>{todos.text}</span>
                <button>delete</button>
            </li>
        </ul>
    );
}

export default Todo;