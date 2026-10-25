import { Link } from "react-router";
import "./App.css";
import "./components/ButtonPage/button.css";

//Initial page
function App() {
  return (
    <main className="container">
      <div className="content">
        <div>
          <h1 className="title">Calculadora de Juros Compostos</h1>
          <p className="subtitle">
            Veja quanto o seu dinheiro rende mês a mês com aportes mensais.
          </p>
        </div>
        <Link to="/home" className="btn">
          Começar simulação
        </Link>
      </div>
    </main>
  );
}

export default App;
