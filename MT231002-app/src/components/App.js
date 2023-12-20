import React, {useState} from "react";
import albumsData from "../../data/albums.json"
import  AlbumsList from "./Albums/AlbumsList.js"

export default function App() {
    const [albums]=useState(albumsData);
    return (
    <AlbumsList albums={albums}/>
    );
}