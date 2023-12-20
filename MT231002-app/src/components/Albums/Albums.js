import React from "react";
export default function Albums({userId,id,title}){
    return(
        <div>
            {"userID:"}{userId}{", id: "}{id}{", title: "}{title}
        </div>
    );
}