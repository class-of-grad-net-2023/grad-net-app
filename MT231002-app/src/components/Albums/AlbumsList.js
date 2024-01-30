import React, { useId } from "react";
import Albums from "./Albums.js";

export default function AlbumsList({albums=[],onRemuveAlbums=f=>f}){
    if(!albums.length) return <div>No Albums Listed.</div>
    return(
        <div>
            {
                albums.map(albums=><Albums key={albums.id} {...albums} onRemove={onRemuveAlbums}/>)
            }
        </div>
    );
}