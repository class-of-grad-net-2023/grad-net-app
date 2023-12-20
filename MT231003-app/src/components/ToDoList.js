import React, { useState } from "react";
import Format_todo from "./Format_todo_item.js";

export default function Pull_todos_elements( {todos = [] } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        <div>
            <h1>ToDoList</h1>
            {
                todos.map(todo => <Format_todo key={todo.id} {...todo} />)
            }
        </div>
    );
}
