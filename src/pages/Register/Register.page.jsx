import React, { useState } from "react";
import "./Register.style.css";

import { Button } from "@mui/material";
import Form from "../../components/Form/Form";
import Avatar from "../../components/Avatar/Avatar";
import Profile from "../../components/Profile/Profile";

const Register = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    name: {
      label: "Name",
      type: "text",
      name: "name",
      value: "",
      error: false,
      helperText: "",
    },
    password: {
      label: "Password",
      type: "password",
      name: "password",
      value: "",
      error: false,
      helperText: "",
      adornmentType: "password",
    },
  });

  const handleTab = () => {
    setTab(tab + 1);
  };

  return (
    <div className="container">
      <h2 className="subtitle">Register</h2>
      {tab === 0 ? (
        <Form data={formData} />
      ) : tab === 1 ? (
        <Avatar heading="Select your avatar" />
      ) : (
        <Profile heading="✅ Registration successful" id={2} name="Akshaya" />
      )}

      {tab !== 2 ? (
        <Button className="darkBtn" onClick={() => handleTab()}>
          Next
        </Button>
      ) : null}
    </div>
  );
};

export default Register;
