import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import { Route, Routes } from "react-router-dom";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
