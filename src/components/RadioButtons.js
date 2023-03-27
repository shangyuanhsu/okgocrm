import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioButtons = (props) => {
  console.log(props);
  const options = props.radioOption;
  const value = () => {
    return props.defaultVal;
  };
  const handleChange = (e) => {
    console.log(!props.isEdit);
    if (!props.isEdit) {
      return;
    }
    props.handleChangeStatus(e.target.value, props.radioTitle);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value()}
        onChange={handleChange}
      >
        {options.map((element) => (
          <FormControlLabel
            key={element.key}
            value={element.key}
            control={<Radio />}
            label={element.name}
            disabled={!props.isEdit}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtons;
