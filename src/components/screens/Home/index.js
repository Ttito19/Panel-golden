import React, { FunctionComponent, useState, useEffect } from "react";
import { FaAdjust, FaCalendar } from "react-icons/fa";
import moment from "moment";
import "./index.scss";

import Card from "./subcomponents/Card";
import Table from "./subcomponents/Table";
import Map from "./subcomponents/Maps/Map";
import { MapProvider } from "./subcomponents/Maps/MapContext";
const Home = (props) => {
  const [date, setDate] = useState(moment().format("LTS"));

  useEffect(() => {
    setTimeout(() => setDate(moment().format("LTS")), 1000);
  }, [date]);

  return (
    <div className="screen-body-dashboard">
      <header className="container-title">
        <h1 className="title">Panel Principal</h1>
        <div className="datenow">
          <p className="today">Hoy</p>
          <p className="date">{date}</p>
        </div>
      </header>
      {/* <section className="container-cards">
        <Card
          icon={<FaAdjust />}
          link="/"
          title="Tabla Empresa"
          count={106}
          colorLeft="#8f8f8f"
          colorRight="#9f9f9f"
        />
        <Card
          icon={<FaAdjust />}
          link="/"
          title="Tabla Cliente"
          count={106}
          colorLeft="#8f8f8f"
          colorRight="#9f9f9f"
        />
        <Card
          icon={<FaAdjust />}
          link="/"
          title="Tabla Chofer"
          count={106}
          colorLeft="#8f8f8f"
          colorRight="#9f9f9f"
        />
      </section> */}
      {/* <section className="aditional-information"> */}
      <section>
        {/* <div className="information-table"></div>
        <div className="table-entry"> */}
        <MapProvider>
          <Map />
        </MapProvider>

        {/* </div> */}
      </section>
    </div>
  );
};

export default Home;
