import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.style.css";

import { Button } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="title">Authentication</div>
      <Button className="lightBtn" onClick={() => navigate("/")}>
        Home
      </Button>
    </nav>
  );
};

export default Navbar;
