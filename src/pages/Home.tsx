import React, { useState } from "react";
import Button from "../components/ButtonPage/button";
import Header from "../components/Header/header";
import InputBox from "../components/InputBox/InputBox";

function Home() {
  //state to store the values of the inputs
  const [state, setState] = useState({
    initialValue: 0,
    initialInvestment: 0,
    interestRate: 0,
    periodMonths: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: Number(value),
    });
  };

  const handleCalculateInterest = (
    initialValue: number,
    monthlyInvestment: number,
    interestRate: number,
    periodMonths: number
  ): number => {
    const result =
      initialValue * 1 +
      interestRate / 10 ** periodMonths +
      monthlyInvestment *
        ((1 + interestRate ** periodMonths - 1) / interestRate);

    console.log(result);
    return result;
  };

  return (
    <div className="containerHome">
      <Header />
      <div className="contentHome">
        <div>
          <h1>Valor Inicial:</h1>
          <InputBox
            icon={"R$"}
            placeholder="Digite o valor inicial"
            value={state.initialValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h1>Investimento mensal:</h1>
          <InputBox
            icon={"R$"}
            placeholder="Digite o investimento"
            value={state.initialInvestment}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h1>Taxa de juros:</h1>
          <InputBox
            icon={"%"}
            placeholder="Digite a taxa de juros"
            value={state.interestRate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h1>Período:</h1>
          <InputBox
            icon={"#"}
            placeholder="Digite o período"
            value={state.periodMonths}
            onChange={handleInputChange}
          />
        </div>
      </div>
      W
      <div>
        <Button
          color={"#040f0f"}
          backgroundColor={"#32e875"}
          onClick={handleCalculateInterest}
        />
        <p>Valor total investido: {state.initialValue}</p>
        <p>valor total acumulado: {state.initialValue}</p>
        <p>valor total taxas: {state.initialValue}</p>
      </div>
    </div>
  );
}

export default Home;
