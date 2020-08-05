import styled from 'styled-components';

const ImageHeight = '180px'

const SectionImage = styled.div`
  width: 100%;
  height: ${ImageHeight};
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  filter: brightness(60%);
  cursor: pointer;
  transition: .3s;

  &:hover{
    filter: brightness(80%);
  }
`;

const TimeToDeparture = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Time = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export {
  SectionImage,
  Image,
  Time,
  TimeToDeparture
}