import React from "react";
import classnames from "classnames";
import "./index.scss";

const Button = props => {
  const { text , onClick , ghost , type } = props;

  //Dynamics Style
  const classDynamic = classnames("button-custom",{ ghost : ghost });

  return <button type={type} className={classDynamic} onClick={onClick}>
    {text}
  </button>
}

Button.defaultProps = {
  type : "submit"
}

export default Button;