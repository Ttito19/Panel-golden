import React, { useState } from 'react';
import { AiOutlineArrowLeft , AiOutlineArrowRight } from 'react-icons/ai'
import TravelCard from '../../../../UIComponents/TravelCard';
import { TravelTitleSection, TravelTitle, ContainerIcon, Icon, TravelCustomContainer } from './styles';

const SectionMain = ({ list , title }) => {
  const [ all , setAll ] = useState(false);

  const ViewAll = () => setAll(!all);

  return <>
    <TravelTitleSection>
      <TravelTitle onClick={ViewAll}>{title}</TravelTitle>
      <ContainerIcon>
        <Icon>
          <AiOutlineArrowLeft />
        </Icon>
        <Icon>
          <AiOutlineArrowRight />
        </Icon>
      </ContainerIcon>
    </TravelTitleSection>
    <TravelCustomContainer all={all} columns={list.length}>
      { list.map((v,i) => <TravelCard key={i} />) }
    </TravelCustomContainer>
  </>
}


export default SectionMain;