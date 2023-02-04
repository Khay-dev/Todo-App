import { useState } from "react";


const MainTodo = ({ addTodo }) => {

    const [value, setValue] = useState("");

    const getSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <div className="main-todo">
            <form action="#" onSubmit={getSubmit}>
                <input type="text" name="text" value={value}
                    onChange={(e) => setValue(e.target.value)} placeholder="add new todo" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default MainTodo;