import React from "react";
import "./ResultTable.css";
//component to render the result calculated
interface TableProps {
  data: {
    month: number;
    totalInvested: number;
    accumulatedInterest: number;
    totalAccumulated: number;
  }[];
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function ResultTable({ data }: TableProps) {
  const last = data[data.length - 1];

  return (
    <section className="result" aria-labelledby="result-title">
      <h2 id="result-title" className="result-title">
        Resultado em {last.month} {last.month === 1 ? "mês" : "meses"}
      </h2>

      <div className="summary">
        <div className="summary-card">
          <span className="summary-label">Total investido</span>
          <span className="summary-value">
            {currencyFormatter.format(last.totalInvested)}
          </span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Juros acumulados</span>
          <span className="summary-value">
            {currencyFormatter.format(last.accumulatedInterest)}
          </span>
        </div>
        <div className="summary-card summary-card--highlight">
          <span className="summary-label">Total acumulado</span>
          <span className="summary-value">
            {currencyFormatter.format(last.totalAccumulated)}
          </span>
        </div>
      </div>

      <div
        className="table-wrapper"
        role="region"
        aria-label="Evolução mês a mês"
        tabIndex={0}
      >
        <table className="result-table">
          <caption className="sr-only">Evolução do investimento mês a mês</caption>
          <thead>
            <tr>
              <th scope="col">Mês</th>
              <th scope="col">Total investido</th>
              <th scope="col">Juros acumulados</th>
              <th scope="col">Total acumulado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.month}>
                <td>{row.month}</td>
                <td>{currencyFormatter.format(row.totalInvested)}</td>
                <td>{currencyFormatter.format(row.accumulatedInterest)}</td>
                <td>{currencyFormatter.format(row.totalAccumulated)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ResultTable;
