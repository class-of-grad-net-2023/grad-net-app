import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import todolist from "./../data/todos.json";

function pull_todos_element( {todos = [] } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        todos.map(<p>userId : { userId }, Id : { Id }, title : { title }, completed : { completed }</p>)
    );
}


ReactDOM.render(<Hello />, document.getElementById("root"));