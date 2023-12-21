import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Format_todo({ id, userId, title, completed, onRemove = f => f , onChangeCompleted = f => f})
{
    const done = completed ? "O" : "X";
    const format_title = title.length < 60 ? title : title.slice(0, 60) + "...";
    const number = id.toString().padStart(3, '0');
    return (
        <>
            <p>
                <button onClick={() => onRemove(id)}>
                    <FaTrash />
                </button>
                &emsp;
                No.{ number } - userID : { userId }
                &emsp;
                done??? : <button onClick={() => onChangeCompleted(id)}>{ done }</button>
                &emsp;
                title : { completed ? <s>{format_title}</s> : format_title }
            </p>
            <hr style={{color: "#AFAEB3", width: "100%"}} />
        </>
    );
}