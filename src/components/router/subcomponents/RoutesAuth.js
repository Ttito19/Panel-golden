import React from "react";
import { Switch, Route } from "react-router-dom";

//Screens
import PageNotFound from "../../screens/PageNotFound";
import Home from "../../screens/Home";
import Addcliente from "../../screens/Cliente/Add_cliente";
import ListCliente from "../../screens/Cliente/List_cliente";
import AddEmpresa from "../../screens/Empresa/Add_empresa";
import ListEmpresa from "../../screens/Empresa/List_empresa";
import AddChofer from "../../screens/Chofer/Add_chofer";
import ListChofer from "../../screens/Chofer/List_chofer";
import AddBus from "../../screens/Buses/addBus";
import ListBus from "../../screens/Buses/ListBus";
import { AddDesign , ListDesign } from "../../screens/Design";

const RoutesAuth = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/AddCliente" component={Addcliente} />
      <Route path="/ListCliente" component={ListCliente} />
      <Route path="/AddEmpresa" component={AddEmpresa} />
      <Route path="/ListEmpresa" component={ListEmpresa} />
      <Route path="/AddChofer" component={AddChofer} />
      <Route path="/ListChofer" component={ListChofer} />
      <Route path="/addBus" component={AddBus} />
      <Route path="/listBus" component={ListBus} />
      <Route path="/addDesign" component={AddDesign} />
      <Route path="/listDesign" component={ListDesign} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default RoutesAuth;
