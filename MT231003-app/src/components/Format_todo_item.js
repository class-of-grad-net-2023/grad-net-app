import React from "react";

export default function Format_HTML({ userId, title, completed })
{
    const done = completed ? "〇" : "✕";
    return (
        <section>
            <p>userID : { userId },  done?? : { done }, title : { title }</p>
        </section>
    );
}