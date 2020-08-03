import styled from "styled-components";
import { height } from "./_variables";

const Container = styled.div`
  width: 100%;
  height : auto;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  width: 100%;
  display: block;
  font-weight: 400;
  margin-bottom: 6px;
`;

const InputSearch = styled.input`
  width: 100%;
  height : ${height};
  border: 1px solid rgb(210,210,210);
  background: #fff;
  padding: 0 1em;
  border-radius: 3px;
`;

export {
  Container,
  Label,
  InputSearch,
  InputContainer
}