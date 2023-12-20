import React, { useState } from "react";

export default function pull_todos_elements( {todos = [] } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        todos.map(<p>userId : { userId }, Id : { Id }, title : { title }, completed : { completed }</p>)
    );
}
