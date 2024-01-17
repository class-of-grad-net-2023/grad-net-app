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
            <table width="100%" border="3">
                <tr width="100%">
                    <td>
                        <button onClick={() => onRemove(id)}>
                            <FaTrash />
                        </button>
                        &nbsp;
                        No.{ number } - userID: { userId }
                    </td> 
                    <td align="right" >
                        is done ???: <span style={{ fontFamily: "富士ポップ", color: "#745030", borderStyle: "dashed", borderColor: "#745030", borderWidth: "2" }} onClick={() => onChangeCompleted(id)}>&thinsp;{ done }&thinsp;</span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ padding: "2px 0px 2px 45px" }}>
                        [title]: { completed ? <s style={{color: "red"}}>{title}</s> : title }
                    </td>
                </tr>
            </table>
        </>
    );
}
