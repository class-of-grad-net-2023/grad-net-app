// main.js
import React, { useState, useEffect }from "react";
import Data from "../../data//albums.json";
import Nexting from "./Next";
import "../css/design.css";

const Main = () => {
  const [AlbumArray, setAlbum] = useState([]);
  const [Page, NewPage] = useState(1);

  useEffect(() => {
    setAlbum(Data);
  }, []);

  const number = 10;
  const Last = Page * 10;
  const First = Last - 10;
  const AlbumItems = AlbumArray.slice(First, Last);


  const Delete = id => {
    const New = AlbumArray.filter((item) => item.id !== id);
    setAlbum(New);
  }

  const Next = (Nextpage) => NewPage(Nextpage);

  return (
    <div>
      <div className="main">
          <div className="title">Album</div>
        <ul>
          {AlbumItems.map((album, index) => (
            <li key={index}>
              <ul className="album">
                <li>UserId: {album.userId},ID: {album.id},Title: {album.title}
                <button className="delete-button"
                      onClick={() => Delete(album.id)}>
                      削除
                    </button>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Nexting
        Albumnumber={number} Total={AlbumArray.length} Page={Page} Nexts={Next}
        />
    </div>
  );
};

export default Main;