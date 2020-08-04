import styled from 'styled-components';

const ImageHeight = '180px'

const TravelCardContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 5px 15px rgb(245,245,245);
`;

const SectionImage = styled.div`
  width: 100%;
  height: ${ImageHeight};
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

const TimeToDeparture = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  color: #fff;
  display: flex;
  align-items: center;
`;

const ToolTip = styled.span`
  width: max-content;
  max-width: 100px;
  position: absolute;
  top: -30px;
  left: -50px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  line-height: normal;
  font-size: 10px;
  transition: .3s;
  cursor: initial;
  opacity: 0;
  visibility: hidden;
`;

const Icon = styled.span`
  font-size: ${p => p.size || '20px'};
  line-height: 0;
  padding-right: 5px;
  position: relative;
  cursor: pointer;

  &:hover ${ToolTip} {
    opacity: 1;
    visibility: visible;
    left: -40px;
  }
`;

const Time = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const SectionInformation = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 0 1em;
`;

const ContainerInformation = styled.div`
  width: 100%;
  margin: 1.5em 0;
`;

const TitleInformation = styled.div`
  display: flex;
  align-items: center;
  color: #4A4A4A;
`;

const Title = styled.span`
  font-size: 1.1em;
  font-weight: bold;
`;

const ContainerButtons = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 5px;
  margin-bottom: 1em;
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
  SectionImage,
  Image,
  TimeToDeparture,
  SectionInformation,
  ContainerButtons,
  Button,
  Time,
  Icon,
  ToolTip,
  ContainerInformation,
  TitleInformation,
  Title
}