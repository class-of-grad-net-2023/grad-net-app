import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import todolist from "./../data/todos.json";
import pull_todos_elements from "./components/pull_todos_elements";

export default function display_todolist()
{
    const [todos] = useState(todolist);
    return <pull_todos_elements todos={todos} />;
}


ReactDOM.render(<display_todolist />, document.getElementById("root"));