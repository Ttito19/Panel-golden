import React from "react";
import "./index.scss";

const Button = props => {
  const { text , onClick , ghost } = props;

  return <button className={`button-custom ${ghost ? "ghost" : ""}`} onClick={onClick}>
    {text}
  </button>
}

export default Button;