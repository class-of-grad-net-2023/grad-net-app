import React from "react";
import Format_todo from "./Format_todo_item.js";
import "../../style.module.css";

export default function ToDolist({
    todos = [],
    page,
    onRemoveTodo = f => f,
    onChangeCompleted = f => f,
    onNextPage = () => f,
    onPreviousPage = () => f
})
{
    const page_amount = 10;
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        <div style={{ backgroundColor: "white", padding: "0px" }}>
            {
                todos.map(todo => 
                            <Format_todo 
                                key={todo.id}
                                {...todo}
                                onRemove={onRemoveTodo}
                                onChangeCompleted={onChangeCompleted} 
                            />
                        ).slice(page*page_amount, page*page_amount+page_amount)
            }
            <p>&ensp;{page+1} / {Math.ceil((todos.length/page_amount))}&ensp;</p>
            { todos.length/page_amount > page+1 && <button onClick={onNextPage}> next </button> }
            { 0 !== page && <button onClick={onPreviousPage}> previous </button> }
        </div>
    );
}