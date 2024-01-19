import React, {useState, useLayoutEffect} from "react";
import albumsData from "../../data/albums.json"
import  AlbumsList from "./Albums/AlbumsList.js"

export default function App() {
    const [page,setPage]=useState(0);
    const [albums,setAlbums]=useState(albumsData.slice(page,page+10));

    //次ページ
    const forwardPage=()=>{
        const new_page=page+10;
        setPage(new_page);
        const newAlbums=albumsData.slice(new_page,new_page+10);
        setAlbums(newAlbums);
    }

    //前ページ
    const backPage=()=>{
        const new_page=page-10;
        setPage(new_page);
        const newAlbums=albumsData.slice(new_page,new_page+10);
        setAlbums(newAlbums);
    }
    

    if(page-10<0){
        return (
        <div>
            <h1>{"アルバム"}</h1>
            <AlbumsList
             albums={albums}
             onRemuveAlbums={id=>{
                const newAlbums = albums.filter(albums=>albums.id!==id);
                setAlbums(newAlbums);
             }}
            />
            <button className="after" onClick={forwardPage}>次へ</button>
        </div>
        );
    
    }else if(page+20>albumsData.length){
        return (
            <div>
            <h1>{"アルバム"}</h1>
            <AlbumsList
             albums={albums}
             onRemuveAlbums={id=>{
                const newAlbums = albums.filter(albums=>albums.id!==id);
                setAlbums(newAlbums);
             }}
            />
                <button className="before"onClick={backPage}>前へ</button>
            </div>
        );
    }else{
        return (
            <div>
            <h1>{"アルバム"}</h1>
            <AlbumsList
             albums={albums}
             onRemuveAlbums={id=>{
                const newAlbums = albums.filter(albums=>albums.id!==id);
                setAlbums(newAlbums);
             }}
            />
                <button className="before"onClick={backPage}>前へ</button>
                {" "}
                <button className="after" onClick={forwardPage}>次へ</button>
            </div>
        );
    }
}