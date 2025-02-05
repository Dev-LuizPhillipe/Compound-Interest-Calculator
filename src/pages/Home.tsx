import React from "react";
import Button from "../components/ButtonPage/button";
import Header from "../components/Header/header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      {/* <div className="content">
        <h1>Valor Inicial:</h1>
        <InputBox />
        <h1>Investimento mensal:-</h1>
        <InputBox />
        <h1>Taxa de juros:</h1>
        <InputBox />
        <h1>Período:</h1>
        <InputBox />
      </div>
      <div>
        <Button
          color={"#040f0f"}
          backgroundColor={"#32e875"}
          onClick={() => console.log("Calculando...")}
        />
      </div> */}
    </div>
  );
}
