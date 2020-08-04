import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import { TravelCardContainer, SectionImage, SectionInformation, Image, TimeToDeparture, ContainerButtons, Button, Time, Icon, ToolTip , ContainerInformation, TitleInformation, Title } from './styles';

const TravelCard = ({ image }) => {
  return <TravelCardContainer>
    <SectionImage>
      <Image src={image} />
      <TimeToDeparture>
        <Icon>
          <IoMdTime />
          <ToolTip>Tiempo restante</ToolTip>
        </Icon>
        <Time>16h 15m</Time>
      </TimeToDeparture>
    </SectionImage>
    <SectionInformation>
      <ContainerInformation>
        <TitleInformation>
          <Icon size='24px'>
            <GoLocation />
          </Icon>
          <Title>Viaje a Lima</Title>
        </TitleInformation>
      </ContainerInformation>
      <ContainerButtons>
        <Button ghost>Registrar Pasajero</Button>
        <Button>Ver Informacion</Button>
      </ContainerButtons>
    </SectionInformation>
  </TravelCardContainer>
}

TravelCard.defaultProps = {
  image : 'https://www.hola.com/imagenes/viajes/20200313163026/coronavirus-cancelaciones-vuelos-derechos-usuarios/0-797-753/cancelaciones-vuelos-t.jpg?filter=w600&filter=ds75'
}

export default TravelCard;