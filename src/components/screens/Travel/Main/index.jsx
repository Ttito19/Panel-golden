import React from 'react';
import SectionMain from './SectionMain';
import { Link } from 'react-router-dom';

const TravelMain = () => {
  const currentTravel = Array(5).fill('');

  return <div className="container">
    <Link to='/travel/list'>Ver tabla</Link>
    <SectionMain title='Viajes en Espera' list={currentTravel} />
    <SectionMain title='Viajes Terminados' list={currentTravel} />
  </div>
}

export default TravelMain;