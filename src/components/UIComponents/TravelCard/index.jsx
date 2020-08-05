import React from 'react';

import { GoLocation } from 'react-icons/go';
import { TravelCardContainer,  SectionInformation, ContainerButtons, Button, ContainerInformation, TitleInformation, Title } from './styles';

//Components
import IconToolTip from './IconToolTip';
import TravelInformation from './TravelInformation';
import TravelImage from './TravelImage';

const TravelCard = ({ id , image , departureTime , destiny , seatsAvailable, seatsOcupped }) => {
  const handlerSeeInformation = () => false;
  const handlerRegisterClient = () => false;

  return <TravelCardContainer>
    <TravelImage source={image} time={departureTime} />
    <SectionInformation>
      <ContainerInformation>
        <TitleInformation>
          <IconToolTip icon={<GoLocation />} message='Destino' />
          <Title>{destiny}</Title>
        </TitleInformation>
        <TravelInformation seatsAvailable={seatsAvailable} seatsOcupped={seatsOcupped} />
      </ContainerInformation>
      <ContainerButtons>
        <Button ghost onClick={handlerSeeInformation} >Ver Informacion</Button>
        <Button onClick={handlerRegisterClient} >Registrar Pasajero</Button>
      </ContainerButtons>
    </SectionInformation>
  </TravelCardContainer>
}

TravelCard.defaultProps = {
  image : 'https://www.hola.com/imagenes/viajes/20200313163026/coronavirus-cancelaciones-vuelos-derechos-usuarios/0-797-753/cancelaciones-vuelos-t.jpg?filter=w600&filter=ds75',
  departureTime : '16h 10min',
  destiny : 'Ciudad de Lima',
  seatsAvailable : 35,
  seatsOcupped : 15
}

export default TravelCard;