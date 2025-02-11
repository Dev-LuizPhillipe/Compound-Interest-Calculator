import React from "react";
//component to render the result calculated
interface TableProps {
  data: {
    month: number;
    totalInvested: number;
    accumulatedInterest: number;
    totalAccumulated: number;
  }[];
}

function ResultTable({ data }: TableProps) {
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="table-responsive" style={{ margin: "20px" }}>
      <table className="table table-striped table-hover table-bordered text-center mt-4 table-dark">
        <thead>
          <tr>
            <th>Meses</th>
            <th>Total Investido</th>
            <th>Juros Acumulados</th>
            <th>Total Acumulado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.month}</td>
              <td>{formatCurrency(row.totalInvested)}</td>
              <td>{formatCurrency(row.accumulatedInterest)}</td>
              <td>{formatCurrency(row.totalAccumulated)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
