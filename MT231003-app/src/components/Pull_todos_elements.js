import React, { useState } from "react";
import Format_HTML from "./Format_HTML.js";

export default function Pull_todos_elements( {todos = [] } )
{
    if(!todos.length) return <div>There is nothing to do now.</div>;
    return (
        <div>
            {
                todos.map(todo => <Format_HTML {...todo} />)
            }
        </div>
    );
}
