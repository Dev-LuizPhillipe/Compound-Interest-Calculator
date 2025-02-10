import React, { useState } from "react";
import Button from "../components/ButtonPage/button";
import Header from "../components/Header/header";
import InputBox from "../components/InputBox/InputBox";
import ResultTable from "../components/ResultTable/ResultTable";

function Home() {
  //state to store the values of the inputs
  const [state, setState] = useState({
    initialValue: "",
    interestRate: "",
    periodMonths: "",
    monthlyInvestment: "",
    resultIsVisible: false,
  });
  const [data, setData] = useState<
    {
      month: number;
      totalInvested: number;
      accumulatedInterest: number;
      totalAccumulated: number;
    }[]
  >([]);

  const handleCalculateInterest = (
    initialValue: number,
    interestRate: number,
    monthlyInvestment: number,
    periodMonths: number
  ): { data: any[] } => {
    const monthlyRate = interestRate / 100;
    let accumulated = initialValue;
    let totalInvested = initialValue;
    const calculatedData: {
      month: number;
      totalInvested: number;
      accumulatedInterest: number;
      totalAccumulated: number;
    }[] = [];

    for (let month = 1; month <= periodMonths; month++) {
      accumulated = accumulated * (1 + monthlyRate) + monthlyInvestment;
      totalInvested += monthlyInvestment;
      const interestGained = accumulated - totalInvested;

      calculatedData.push({
        month,
        totalInvested: totalInvested,
        accumulatedInterest: interestGained,
        totalAccumulated: accumulated,
      });
    }

    return { data: calculatedData };
  };
  //function to handle the click event, return the result of calculation
  const handleClick = () => {
    const { initialValue, interestRate, periodMonths, monthlyInvestment } =
      state;
    if (!initialValue || !interestRate || !periodMonths) {
      alert("Preencha todos os campos!");
      return;
    }
    const { data } = handleCalculateInterest(
      Number(state.initialValue),
      Number(state.interestRate),
      Number(state.monthlyInvestment),
      Number(state.periodMonths)
    );
    setData(data);
    setState((prev) => ({ ...prev, resultIsVisible: true }));
  };

  //function to handle the change event, update the state with the value of the input
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => ({
      ...prev,
      [name]: value === "" ? "" : Number(value),
    }));
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
        <div>
          <h1>Investimento mensal:</h1>
          <InputBox
            icon={"R$"}
            placeholder="Digite o investimento"
            type="number"
            value={state.monthlyInvestment}
            onChange={handleOnChange}
            name="monthlyInvestment"
          />
        </div>
        <div>
          <h1>Taxa de juros:</h1>
          <InputBox
            icon={" %"}
            placeholder="Digite a taxa de juros"
            type="number"
            value={state.interestRate}
            onChange={handleOnChange}
            name="interestRate"
          />
        </div>
        <div>
          <h1>Período(Meses):</h1>
          <InputBox
            icon={" #"}
            placeholder="Digite o período"
            type="number"
            value={state.periodMonths}
            onChange={handleOnChange}
            name="periodMonths"
          />
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button
          color={"#040f0f"}
          backgroundColor={"#32e875"}
          onClick={handleClick}
        />
      </div>
      {state.resultIsVisible && (
        <>
          <ResultTable data={data} />
        </>
      )}
    </div>
  );
}

export default Home;
