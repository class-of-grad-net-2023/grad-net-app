// main.js
import React, { useState, useEffect }from "react";
import Data from "../../data//albums.json";
import "../css/design.css";

const Main = () => {
  const [AlbumArray, setAlbum] = useState([]);

  useEffect(() => {
    setAlbum(Data);
  }, []);
  
  const AlbumItems = AlbumArray.slice(1, 10);

  return (
    <div>
      <div className="main-content-warpper">
          <div className="title">Album</div>
        <ul>
          {AlbumItems.map((album, index) => (
            <li key={index}>
              <ul className="list-container">
                <li>UserId: {album.userId},ID: {album.id},Title: {album.title}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;