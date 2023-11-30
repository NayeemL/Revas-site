import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/NavBar/navBar";
import Home from "./components/pages/home";
import WallBed from "./components/pages/wallBed";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/wallbed" element={<WallBed/>}/>
      </Routes>
    </div>
  );
}

export default App;
