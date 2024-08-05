import { useState, useEffect} from "react";

export default function Todo(){
    const [todoItem, setTodoItem] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then(((json) => setTodoItem(json)));
    }, [])

    return (
        <div>
            <h1>Todo Items</h1>
            {todoItem.title || ""}
        </div>
    )
}