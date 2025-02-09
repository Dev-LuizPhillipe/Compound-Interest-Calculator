import React, { useState } from "react";
import Button from "../components/ButtonPage/button";
import Header from "../components/Header/header";
import InputBox from "../components/InputBox/InputBox";

function Home() {
  //state to store the values of the inputs
  const [state, setState] = useState({
    initialValue: "",
    interestRate: "",
    periodMonths: "",
    resultIsVisible: false,
  });
  const [total, setTotal] = useState<number | null>(null);

  const handleCalculateInterest = (
    initialValue: number,
    interestRate: number,
    periodMonths: number
  ): number => {
    return initialValue * (1 + interestRate / 100) ** periodMonths;
  };
  //function to handle the click event, return the result of calculation
  const handleClick = () => {
    const { initialValue, interestRate, periodMonths } = state;
    if (!initialValue || !interestRate || !periodMonths) {
      alert("Preencha todos os campos!");
      return;
    }
    const result = handleCalculateInterest(
      Number(state.initialValue),
      Number(state.interestRate),
      Number(state.periodMonths)
    );
    setTotal(result);
    setState((prev) => ({ ...prev, resultIsVisible: true }));
    console.log(result);
  };

  //function to handle the change event, update the state with the value of the input
  const handleOnChange = (e) =>
    setState((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));

  //function to format the value to BRL
  const handleFormatValue = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
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
            type="number"
            value={state.initialValue}
            onChange={handleOnChange}
            name="initialValue"
          />
        </div>
        {/* <div>
          <h1>Investimento mensal:</h1>
          <InputBox
            icon={"R$"}
            placeholder="Digite o investimento"
            type="number"
            value={state.monthlyInvestment}
            onChange={handleOnChange}
            name="monthlyInvestment"
          />
        </div> */}
        <div>
          <h1>Taxa de juros:</h1>
          <InputBox
            icon={"%"}
            placeholder="Digite a taxa de juros"
            type="number"
            value={state.interestRate}
            onChange={handleOnChange}
            name="interestRate"
          />
        </div>
        <div>
          <h1>Período:</h1>
          <InputBox
            icon={"#"}
            placeholder="Digite o período"
            type="number"
            value={state.periodMonths}
            onChange={handleOnChange}
            name="periodMonths"
          />
        </div>
      </div>
      <div>
        <Button
          color={"#040f0f"}
          backgroundColor={"#32e875"}
          onClick={handleClick}
        />
        <p>Valor total investido: {total ? handleFormatValue(total) : ""}</p>
        {/* <p>Valor total investido: {state.initialValue}</p>
        <p>valor total acumulado: {state.interestRate}</p>
        <p>valor total taxas: {state.periodMonths}</p> */}
      </div>
    </div>
  );
}

export default Home;
