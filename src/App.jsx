import { useNavigate } from "react-router";
import "./App.css";
import Button from "./components/ButtonPage/button";

//Initial page
function App() {
  //function for navigation
  const navigate = useNavigate();
  function NavigationClick() {
    navigate("/home");
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">
          CALCULADORA DE <br />
          JUROS COMPOSTOS
        </h1>
        <Button
          color={"#040f0f"}
          backgroundColor={"#32e875"}
          onClick={NavigationClick}
        />
      </div>
    </div>
  );
}

export default App;
