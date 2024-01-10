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
            <table>
                <tr>
                    <td>
                        <button onClick={() => onRemove(id)}>
                            <FaTrash />
                        </button>
                        &nbsp;
                        No.{ number } - userID: { userId }
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: "2px 0px 2px 45px" }}>
                        is done ???: <span style={{ fontFamily: "富士ポップ", color: "#745030", borderStyle: "dashed", borderColor: "#745030", borderWidth: "2" }} onClick={() => onChangeCompleted(id)}>&thinsp;{ done }&thinsp;</span>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: "2px 0px 2px 45px" }}>
                        [title]: { completed ? <s style={{color: "red"}}>{title}</s> : title }
                    </td>
                </tr>
            </table>
            <hr style={{color: "#AFAEB3", width: "100%"}} />
        </>
    );
}
