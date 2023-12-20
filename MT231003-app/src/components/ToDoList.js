import React, { useState } from "react";
import Format_todo from "./Format_todo_item.js";

export default function ToDolist( {todos = [], onRemoveTodo = f => f } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        <div>
            <h1>ToDoList</h1>
            {
                todos.map(todo => <Format_todo key={todo.id} {...todo} onRemove={onRemoveTodo} />)
            }
        </div>
    );
}
