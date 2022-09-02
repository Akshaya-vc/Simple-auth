import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.style.css";

import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container home">
      <Button className="darkBtn" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button className="darkBtn" onClick={() => navigate("/register")}>
        Register
      </Button>
    </div>
  );
};

export default Home;
