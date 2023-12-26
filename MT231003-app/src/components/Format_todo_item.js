import React, { useState } from "react";
import { FaEnvelopeSquare, FaTrash } from "react-icons/fa";
import "../../style.module.css";

export default function Format_todo({
    id,
    userId,
    title,
    completed,
    onRemove = f => f,
    onChangeCompleted = f => f
})
{
    const done = completed ? "O" : "X";
    const number = id.toString().padStart(3, '0');
    return (
        <>
            <p className="ToDo">
                <button onClick={() => onRemove(id)}>
                    <FaTrash />
                </button>
                &emsp;
                No.{ number } - userID: { userId }
                &emsp;
                done???: <button onClick={() => onChangeCompleted(id)}>{ done }</button>
                &emsp;
                title: { completed ? <s style={{color: "red"}}>{title}</s> : title }
            </p>
            <hr style={{color: "#AFAEB3", width: "100%"}} />
        </>
    );
}
