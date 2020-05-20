import React from "react";

const Control = ({
  name,
  min,
  max,
  step,
  label,
  handleChange,
  controlStyle,
  defultValue,
}) => {
  return (
    <div className={"control " + controlStyle}>
      <input
        type="range"
        orient="vertical"
        name={name}
        min={min}
        max={max}
        step={step}
        onInput={handleChange}
        defaultValue={defultValue}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Control;
