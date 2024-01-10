import React, {useState} from "react";
import albumsData from "../../data/albums.json"
import  AlbumsList from "./Albums/AlbumsList.js"

export default function App() {
    const [albums]=useState(albumsData);
    const albums2=[];
    console.log(albums2);
    for(let i=0;i<5;i++){
        albums2.push(albums[i]);
    }
    return (
    <AlbumsList albums={albums2}/>
    );
}