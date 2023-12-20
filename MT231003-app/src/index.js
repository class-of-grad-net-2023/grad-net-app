import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import todolist from "./../data/todos.json";
import ToDoList from "./components/ToDoList.js";

export default function Display_todolist()
{
    const [todos, current_todos] = useState(todolist);
    return (
        <ToDoList
            todos={todos}
            onRemoveTodo={id => {
                const newToDoList = todos.filter(todo => todo.id !== id);
                current_todos(newToDoList);
            }}/>
    );
}


ReactDOM.render(<Display_todolist />, document.getElementById("root"));