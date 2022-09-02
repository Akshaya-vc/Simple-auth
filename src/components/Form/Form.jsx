import React, { useState } from "react";

const Form = (props) => {
  const { data } = props;
  const [formData, setFormData] = useState(data);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: {
        ...formData[event.target.name],
        value: event.target.value,
      },
    });
  };

  return Object.keys(formData).map((field) => {
    return (
      <div className="textfield">
        <label>{formData[field].label}</label>
        <input
          label={formData[field].label}
          type={formData[field].type}
          name={formData[field].name}
          variant="outlined"
          id={formData[field].name}
          //   autoFocus={formData[field].name === ""}
          className="textfield"
          value={formData[field].value}
          error={formData[field].error}
          helperText={formData[field].helperText}
          onChange={handleFormChange}
        />
      </div>
    );
  });
};

export default Form;
