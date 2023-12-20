import React, { useState } from "react";

export default function Pull_todos_elements( {todos = [] } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        <div>
            todos.map(<p>userId : { todos.userId }, Id : { todos.Id }, title : { todos.title }, completed : { todos.completed }</p>)
        </div>
    );
}
