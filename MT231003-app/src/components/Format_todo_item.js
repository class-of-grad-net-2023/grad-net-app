import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Format_todo({ id, userId, title, completed, onRemove = f => f })
{
    const done = completed ? "〇" : "✕";
    return (
        <>
            <p>
                <button onClick={() => onRemove(id)}>
                    <FaTrash />
                </button>
                &emsp;
                userID : { userId },  done?? : { done }, title : { title }
            </p>
        </>
    );
}