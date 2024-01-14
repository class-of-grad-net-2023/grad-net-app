import React, {useState} from "react";
import albumsData from "../../data/albums.json"
import  AlbumsList from "./Albums/AlbumsList.js"

export default function App() {
    const [albums]=useState(albumsData);
    const albums2=[];
    var page=0;

    //データ分割
    for(let i=page;i<10;i++){
        if(albums[i]!==null){
            albums2.push(albums[i]);
        }
    }

    if(page<1){
        return (
        <div>
            <h1>{"アルバム"}</h1>
            <AlbumsList albums={albums2}/>
            <button className="after">次へ</button>
        </div>
        );
    }else{
        return (
            <div>
                <h1>{"アルバム"}</h1>
                <AlbumsList albums={albums2}/>
                <button className="before">前へ</button>
                {" "}
                <button className="after">次へ</button>
            </div>
            );
    }
}