import { Button, TextField } from "@mui/material";
import React from "react";

const Spinbox = ({ value, setValue }) => {
  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    const newValue = value - 1;
    if (value > 0) setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "flex-start",
        width: { md: 670 },
      }}
    >
      <TextField
        sx={{
          width: {
            md: 526,
          },
        }}
        onChange={(e) => {
          const inputValue = e.target.value;

          // Use a regular expression to check if the input is a valid number (decimal or integer)
          if (
            /^[0-9]*\.?[0-9]*$/.test(inputValue) ||
            inputValue.trim() === ""
          ) {
            // Update the state if the input is valid or empty
            if (inputValue.slice(-1) === ".") setValue(inputValue);
            else if (inputValue === "") setValue(0);
            else {
              if (Number(inputValue) > 0) setValue(Number(inputValue));
            }
          } else {
            setValue(0);
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
