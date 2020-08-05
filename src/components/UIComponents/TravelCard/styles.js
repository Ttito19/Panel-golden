import styled from 'styled-components';

const TravelCardContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 5px 15px rgb(245,245,245);
  border-radius: 20px;
`;

const SectionInformation = styled.div`
  width: 100%;
  height: max-content;
  padding: 0 1.5em;
`;

//Information
const ContainerInformation = styled.div`
  width: 100%;
  margin: 1.3em 0;
  margin-bottom: 1.5em;
`;

//Title
const TitleInformation = styled.div`
  display: flex;
  align-items: center;
  color: #4A4A4A;
  margin-bottom: 1.3em;
`;

const Title = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`;

//Buttons
const ContainerButtons = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 5px;
  padding-bottom: 1.5em;
`;

const Button = styled.button`
  width: 100%;
  padding: .7em 0;
  border: 1px solid #F8B83E;
  font-size: 13px;
  font-weight: bold;
  background-color: ${p => p.ghost ? '#fff' : '#F8B83E'};
  color: ${p => p.ghost ? '#F8B83E' : '#fff'};
  outline: none !important;

  &:hover {
    background-color: ${p => !p.ghost ? '#2A5AD7' : '#F8B83E'};
    color: #fff;
    border-color: ${p => !p.ghost ? '#2A5AD7' : '#F8B83E'};
  }
`;

export {
  TravelCardContainer,
  SectionInformation,
  ContainerButtons,
  Button,
  ContainerInformation,
  TitleInformation,
  Title
}