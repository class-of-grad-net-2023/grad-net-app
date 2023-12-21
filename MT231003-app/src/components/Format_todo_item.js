import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Format_todo({ id, userId, title, completed, onRemove = f => f })
{
    const done = completed ? "○" : "✕";
    const number = id.toString().padStart(3, '0');
    return (
        <>
            <p>
                <button onClick={() => onRemove(id)}>
                    <FaTrash />
                </button>
                &emsp;
                No.{ number } - userID : { userId },  done??? : { done },  title : { title }
            </p>
        </>
    );
}