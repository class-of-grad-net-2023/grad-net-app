import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Format_todo({ id, userId, title, completed, onRemove = f => f , onChangeCompleted = f => f})
{
    const done = completed ? "O" : "X";
    const number = id.toString().padStart(3, '0');
    return (
        <>
            <p>
                <button onClick={() => onRemove(id)}>
                    <FaTrash />
                </button>
                &emsp;
                No.{ number } - userID : { userId },  done??? : <button onClick={() => onChangeCompleted(id)}>{ done }</button>,  title : { title }

            </p>
        </>
    );
}