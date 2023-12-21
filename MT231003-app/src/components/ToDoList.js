import React, { useState } from "react";
import Format_todo from "./Format_todo_item.js";

export default function ToDolist( {todos = [], page, onRemoveTodo = f => f , onNextPage = () => f} )
{
    const page_amount = 10;
    console.log(todos.length/10);
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        <div>
            <h1>ToDoList</h1>
            {
                todos.map(todo => <Format_todo key={todo.id} {...todo} onRemove={onRemoveTodo} />).slice(page*page_amount, page*page_amount+page_amount)
            }
            {
                todos.length/10 < page+1 ? <div></div> : <button onClick={onNextPage}> next </button>
            }
        </div>
    );
}