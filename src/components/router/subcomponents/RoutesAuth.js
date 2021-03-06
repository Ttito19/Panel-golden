import React from "react";
import { Switch, Route } from "react-router-dom";

///ttito imports
import PageNotFound from "../../screens/PageNotFound";
import Home from "../../screens/Home";
import AddClients from "../../screens/Clients/AddClients";
import ListClients from "../../screens/Clients/ListClients";
import AddEmpresa from "../../screens/Empresa/Add_empresa";
import ListEmpresa from "../../screens/Empresa/List_empresa";
import AddChofer from "../../screens/Chofer/Add_chofer";
import ListChofer from "../../screens/Chofer/List_chofer";
import AddBusStop from "../../screens/BusStop/addBusStop";
import ListBusStop from "../../screens/BusStop/ListBusStop";
import AddLocation from "../../screens/Location/AddLocation";
import ListLocation from "../../screens/Location/ListLocation";
import AddBus from "../../screens/Bus/addBus";
import ListBus from "../../screens/Bus/listBus";

import EmpresaTravels from "../../screens/Empresa/empresaTravels";
import EmpresaWorkers from "../../screens/Empresa/empresaWorkers";
import Chats from "../../screens/Chats";
//Billy Imports
import {
  AddDesign,
  ListDesign,
  ViewDesign,
  UpdateDesign,
} from "../../screens/Design";

//Parent Context Billy
import { SeatDesignProvider } from "../../../context/seatDesignContext";
//Parent Context Ttito
import { CompanyProvider } from "../../../context/companyContext";
import { BusStopProvider } from "../../../context/busStopContext";
import { LocationProvider } from "../../../context/locationContext";
import { ClientProvider } from "../../../context/clientsContext";
import { BusProvider } from "../../../context/busContext";
import { TravelAdd, TravelList, TravelMain } from "../../screens/Travel";
import { TravelProvider } from "../../../context/travelContext";

const RoutesAuth = () => {
  return (
    <SeatDesignProvider>
      <BusProvider>
        <ClientProvider>
          <LocationProvider>
            <CompanyProvider>
              <BusStopProvider>
                <TravelProvider>
                  <Switch>
                    {/*ttito    */}
                    <Route exact path="/" component={Home} />
                    <Route path="/AddCliente" component={AddClients} />
                    <Route path="/ListCliente" component={ListClients} />
                    <Route path="/AddEmpresa" component={AddEmpresa} />
                    <Route path="/ListEmpresa" component={ListEmpresa} />
                    <Route path="/AddChofer" component={AddChofer} />
                    <Route path="/ListChofer" component={ListChofer} />
                    <Route path="/addBusStop" component={AddBusStop} />
                    <Route path="/listBusStop" component={ListBusStop} />
                    <Route path="/addLocation" component={AddLocation} />
                    <Route path="/listLocation" component={ListLocation} />
                    <Route path="/addBus" component={AddBus} />
                    <Route path="/ListBus" component={ListBus} />
                    <Route path="/Chats" component={Chats} />

                    {/* Billy */}
                    <Route path="/design/add" component={AddDesign} />
                    <Route path="/design/list" component={ListDesign} />
                    <Route path="/design/update/:id" component={UpdateDesign} />
                    <Route path="/design/:id" component={ViewDesign} />
                    <Route exact path="/travel" component={TravelMain} />
                    <Route path="/travel/list" component={TravelList} />
                    <Route path="/travel/add" component={TravelAdd} />

                    {/* Mayo */}
                    <Route
                      path="/EmpresaTravels/:id"
                      component={EmpresaTravels}
                    />
                    <Route
                      path="/EmpresaWorkers/:id"
                      component={EmpresaWorkers}
                    />

                    {/* Page Not Found */}
                    <Route path="*" component={PageNotFound} />
                  </Switch>
                </TravelProvider>
              </BusStopProvider>
            </CompanyProvider>
          </LocationProvider>
        </ClientProvider>
      </BusProvider>
    </SeatDesignProvider>
  );
};

export default RoutesAuth;
