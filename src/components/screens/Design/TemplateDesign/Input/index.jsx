import React from "react";
import "./index.scss";

const Input = props => {
  const { title , DefValue , onChange } = props;

  return <div className="input-component">
    <div className="container-label">
      <label className="label" htmlFor="">{title}</label>
    </div>
    <div className="container-input">
      <input className="input" type="text" onChange={onChange} defaultValue={DefValue} />
    </div>
  </div>
}

export default Input;