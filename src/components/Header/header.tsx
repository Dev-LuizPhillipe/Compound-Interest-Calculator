import React from "react";
import "./header.css";

//component Header from the application

function Header() {
  return (
    <header className="header-bkg">
      <div className="img-header">
        <img
          src="/icon-progress.png"
          alt=""
          width={48}
          height={48}
          className="img"
        />
      </div>
      <h1 className="title-header">Simulador de Juros Compostos</h1>
    </header>
  );
}
export default Header;
