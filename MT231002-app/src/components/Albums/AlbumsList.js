import React from "react";
import Albums from "./Albums";

export default function AlbumsList({albums=[]}){
    if(!albums.length) return <div>No Albums Listed.</div>
    return(
        <div>
            {
                Albums.map(albums=><Albums key={id} {...albums}/>)
            }
        </div>
    )
}