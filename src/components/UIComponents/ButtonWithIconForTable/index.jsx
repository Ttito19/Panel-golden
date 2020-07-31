import React from "react";
import classnames from "classnames";

const ButtonWithIconForTable = ({ icon , theme, onClick }) => {
  const styleClass = classnames("btn","btn-sm",`btn-${theme}`,"ml-1");

  return <button className={styleClass} onClick={onClick}>
    { icon }
  </button>
}

ButtonWithIconForTable.defaultProps = {
  theme : "primary",
  onClick : () => false
}

export default ButtonWithIconForTable;