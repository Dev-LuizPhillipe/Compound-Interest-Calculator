import React from "react";
import Button from "../components/ButtonPage/button";
import Header from "../components/Header/header";
import InputBox from "../components/InputBox/InputBox";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="contentHome">
        <div>
          <h1>Valor Inicial:</h1>
          <InputBox />
        </div>
        <div>
          <h1>Investimento mensal:</h1>
          <InputBox />
        </div>
        <div>
          <h1>Taxa de juros:</h1>
          <InputBox />
        </div>
        <div>
          <h1>Período:</h1>
          <InputBox />
        </div>
      </div>
      <div>
        <Button
          color={"#040f0f"}
          backgroundColor={"#32e875"}
          onClick={() => console.log("Calculando...")}
        />
      </div>
    </div>
  );
}
