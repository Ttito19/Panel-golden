import styled , { keyframes } from "styled-components";

const AnimationSpinner = keyframes`
  to { transform: rotate(1turn); }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: ${props => props.size};
  height : ${props => props.size};
  position : ${props => props.position};
  border: 4px solid rgb(230,230,230);
  border-right-color : ${props => props.color}; 
  border-radius : 50%;
  animation: ${AnimationSpinner} .5s linear infinite;
`;

const SpinnerPosition = styled(Spinner)`
  top : 0;
  right : 0;
  left : 0;
  bottom : 0;
  margin: auto;
`;

export {
  Spinner,
  SpinnerPosition,
  Container
}