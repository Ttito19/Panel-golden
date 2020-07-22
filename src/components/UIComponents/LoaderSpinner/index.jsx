import React from "react";
import "./index.scss";

const LoaderSpinner = props => {
  const { color , size , position , maxcontent } = props;

  const styles = {
    width : size,
    height : size,
    color,
    position,
    borderRightColor: color,
  }

  if(maxcontent){
    return <div className="container-fluid-spinner" >
      <div className="loader-spinner" style={styles}>
      </div>
    </div>
  }

  return <div className="loader-spinner" style={styles}>
  </div>
}

LoaderSpinner.defaultProps = {
  size : 40,
  color : "black"
}

export default LoaderSpinner;