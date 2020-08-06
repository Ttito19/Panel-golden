import styled , { css } from 'styled-components';

const TravelTitleSection = styled.div`
  width: 100%;
  margin: 1.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TravelTitle = styled.span`
  color: #4A4A4A;
  font-weight: bold;
  font-size: 1.5em;
`;

const ContainerIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(2,40px);
  grid-gap: 4px;

  ${p => p.all ? css`display: none;` : null};
`;

const Icon = styled.span`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  background-color: #fff;
  cursor: pointer;
  transition: .3s;

  &:hover {
    border: 1px solid #2A5AD7;
    color: #2A5AD7;
  }
`;

const TravelCustomContainer = styled.div`
  width: 100%;
  padding: 1em 0;
  display: grid;

  ${p => {
    if(!p.all){
      return css`
        grid-template-columns: repeat(${p => p.columns},300px);
        grid-gap: 2em;
        overflow-x: auto;

        &::-webkit-scrollbar {
          display: none;
        }
      `;
    }else{
      return css`
        height: 70vh;
        overflow: auto;
        grid-template-columns: repeat(3,300px);
        grid-gap: 1.5em;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #4A4A4A;
        }
      `
    }
  }}
`;

export {
  TravelCustomContainer,
  TravelTitle,
  TravelTitleSection,
  ContainerIcon,
  Icon
}