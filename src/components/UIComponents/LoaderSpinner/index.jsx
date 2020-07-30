import React from "react";
import { Container , Spinner , SpinnerPosition } from "./styles";

const LoaderSpinner = props => {
  const { color , size , position , maxcontent } = props;

  const spinnerProps = () => ({ color, size, position });

  if(maxcontent){
    return <Container>
      <Spinner {...spinnerProps()} />
    </Container>
  }

  return <SpinnerPosition {...spinnerProps()} />
}

LoaderSpinner.defaultProps = {
  size : "40px",
  color : "#062977",
  position : "relative"
}

export default LoaderSpinner;