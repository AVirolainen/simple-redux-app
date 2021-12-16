import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>React Redux App</h1>}></Route>
        <Route path="/add" element={<h1>React Reeeeedux App</h1>}></Route>
        <Route path="/edit/:id" element={<h1>React Redux App</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
