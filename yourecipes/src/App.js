import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
