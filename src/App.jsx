import "./App.css";
import Button from "./components/ButtonPage/button";

//Initial page
function App() {
  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title">
          CALCULADORA DE <br />
          JUROS COMPOSTOS
        </h1>
        <a href="./pages/Home">
          <Button color={"#040f0f"} backgroundColor={"#32e875"} />
        </a>
      </div>
    </div>
  );
}

export default App;
