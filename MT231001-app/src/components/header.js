import React from "react";
import "../css/style.css";

const Header_todo = () => {
  return (
    <div className="header">
      <h1 className="header_logo">TODO Application!</h1>
      <nav className="header_nav">
        <ul className="header_list">
          <li className="header_item">
            <a href="">私たちの特徴</a>
          </li>
          <li className="header_item">
            <a href="">サービス</a>
          </li>
          <li className="header_item">
            <a href="">実績</a>
          </li>
          <li className="header_item">
            <a href="">ブログ</a>
          </li>
          <li className="header_item">
            <a href="">会社概要</a>
          </li>
          <li className="header_item_contact">
            <a href="">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header_todo;