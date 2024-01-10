import React from "react";
export default function Albums({userId,id,title}){
    return(
        <div>
            <li>
                {"userID:"}{userId}{", id: "}{id}{", title: ”"}{title}{"” "}
                <button className="delete">削除</button>
            </li>
        </div>
    );
}