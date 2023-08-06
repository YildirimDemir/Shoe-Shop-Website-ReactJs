import { useState } from "react";

export default function Header({ backroundImg, title, text }) {
  return (
    <header style={{ backgroundImage: `url(${backroundImg})` }}>
      <div className="header-content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
}
