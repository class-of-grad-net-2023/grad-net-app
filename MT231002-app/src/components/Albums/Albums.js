import React from "react";

export default function Albums({
    userId,
    id,
    title,
    onRemove=f=>f
    }){
    return(
        <div>
            <li>
                {"userID:"}{userId}{", id: "}{id}{", title: ”"}{title}{"” "}
                <button className="delete" onClick={()=>onRemove(id)}>削除</button>
            </li>
        </div>
    );
}