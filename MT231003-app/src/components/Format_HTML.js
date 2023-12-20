import React from "react";

export default function Format_HTML({ userId, Id, title, completed })
{
    return (
        <section>
            <p>completed : { completed }, title : { title }</p>
        </section>
    );
}