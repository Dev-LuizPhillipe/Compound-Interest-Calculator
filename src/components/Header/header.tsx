import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header-bkg">
      <div className="img-header">
        <img src="/icon-progress.png" alt="logo" className="img" />
      </div>
      <h1 className="title-header">SIMULADOR DE JUROS COMPOSTOS</h1>
    </div>
  );
}
export default Header;
