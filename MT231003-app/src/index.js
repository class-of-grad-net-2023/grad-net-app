import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import todolist from "./../data/todos.json";
import Pull_todos_elements from "./components/Pull_todos_elements";

export default function Display_todolist()
{
    const [todos] = useState(todolist);
    return <Pull_todos_elements todos={todos} />;
}


ReactDOM.render(<Display_todolist />, document.getElementById("root"));