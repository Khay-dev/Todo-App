import { useState, useEffect } from "react";


const MainTodo = ({ value: defaultValue, onSubmit }) => {
    const [value, setValue] = useState(defaultValue);

    const getSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        onSubmit(value);
        setValue("");
    };

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue])

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