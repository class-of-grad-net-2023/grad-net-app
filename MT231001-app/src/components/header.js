import React from "react";
import "../css/style.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header_logo">Todo_App 株式会社</h1>
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

export default Header;