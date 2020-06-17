import React from "react";
import { Switch, Route } from "react-router-dom";

//Screens
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
const RoutesAuth = () => {
  return (
    <Switch>
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
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default RoutesAuth;
