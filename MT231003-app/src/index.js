import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import todolist from "./../data/todos.json";

function pull_todos_elements( {todos = [] } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        todos.map(<p>userId : { userId }, Id : { Id }, title : { title }, completed : { completed }</p>)
    );
}

function display_todolist()
{
    const [todos] = useState(todolist);
    return <pull_todos_elements todos={todos} />;
}


ReactDOM.render(<display_todolist />, document.getElementById("root"));