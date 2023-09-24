import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Spinbox = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <TextField
        onChange={(e) => {
          const inputValue = e.target.value;

          // Use a regular expression to check if the input is a valid number (decimal or integer)
          if (/^[0-9]*\.?[0-9]*$/.test(inputValue) || inputValue === "") {
            // Update the state if the input is valid or empty
            if (inputValue.slice(-1) === ".") setValue(inputValue);
            else setValue(Number(inputValue));
          }
        }}
        label="Value"
        variant="outlined"
        value={value}
      />
      <Button variant="outlined" onClick={handleIncrement}>
        +
      </Button>
      <Button variant="outlined" onClick={handleDecrement}>
        -
      </Button>
    </div>
  );
};

export default Spinbox;
