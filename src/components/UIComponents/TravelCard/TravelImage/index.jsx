import React from 'react';
import { IoMdTime } from 'react-icons/io';

//Styles
import { SectionImage, TimeToDeparture, Image , Time } from './styles';

//Components
import IconToolTip from '../IconToolTip';

const TravelImage = ({ source , time }) => {
  return <SectionImage>
    <Image src={source} />
    <TimeToDeparture>
      <IconToolTip icon={<IoMdTime />} message='Tiempo restante' />
      <Time>{time}</Time>
    </TimeToDeparture>
  </SectionImage>
}

export default TravelImage;