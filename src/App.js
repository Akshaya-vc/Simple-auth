import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import Login from "./pages/Login/Login.page";
import Register from "./pages/Register/Register.page";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
