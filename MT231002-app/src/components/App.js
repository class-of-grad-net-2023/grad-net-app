import React, {useState} from "react";
import albumsData from "../../data/albums.json"
import  AlbumsList from "./Albums/AlbumsList.js"

export default function App() {
    const [albums,setAlbums]=useState(albumsData);
    const [page, setPage]=useState(0);
    const [albums2, setAlbums2]=useState(albums.slice(page,10));

    
    function forwardPage(){
        setPage(page+10);
        setAlbums2(albums.slice(page,10));
    }
    
    function backPage(){
        setPage(page-10);
        setAlbums2(albums.slice(page,10));
    }
    

    if(page<1){
        return (
        <div>
            <h1>{"アルバム"}</h1>
            <AlbumsList albums={albums2}/>
            <button className="after" onClick={()=>forwardPage()}>次へ</button>
        </div>
        );
    
    }else if(page+10>albums.length){
        return (
            <div>
                <h1>{"アルバム"}</h1>
                <AlbumsList albums={albums2}/>
                <button className="before"onClick={()=>backPage()}>前へ</button>
            </div>
        );
    }else{
        return (
            <div>
                <h1>{"アルバム"}</h1>
                <AlbumsList albums={albums2}/>
                <button className="before"onClick={()=>backPage()}>前へ</button>
                {" "}
                <button className="after" onClick={()=>forwardPage()}>次へ</button>
            </div>
        );
    }
}