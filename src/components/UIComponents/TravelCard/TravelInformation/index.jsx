import React from 'react'
import { ListInformation, TextInformation, ListItemInformation } from './styles';

const TravelInformation = ({ seatsAvailable , seatsOcupped }) => {
  return <div>
    <ListInformation>
      <ListItemInformation>
        <TextInformation>Lugar de Partida : </TextInformation>
        <TextInformation light>Huanuco</TextInformation>
      </ListItemInformation>
      <ListItemInformation>
        <TextInformation>Asientos Disponibles : </TextInformation>
        <TextInformation light>{seatsAvailable}</TextInformation>
      </ListItemInformation>
      <ListItemInformation>
        <TextInformation>Asientos Ocupados : </TextInformation>
        <TextInformation light>{seatsOcupped}</TextInformation>
      </ListItemInformation>
    </ListInformation>
  </div>
}

export default TravelInformation;