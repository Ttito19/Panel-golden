import React from "react";
import { auth } from "firebase";
import { AiOutlineHome, AiOutlineTable, AiOutlineLogout } from "react-icons/ai";
import { TiCogOutline } from "react-icons/ti";

const configSideBar = [
  {
    type: "normal",
    icon: <AiOutlineHome />,
    title: "Dashboard",
    link: "/",
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Empresa",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar empresa",
        link: "/AddEmpresa",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de empresas",
        link: "/ListEmpresa",
      },
    ],
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Cliente",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar clientes",
        link: "/AddCliente",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de clientes",
        link: "/ListCliente",
      },
    ],
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Diseño",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Crear Diseño",
        link: "/addDesign",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de Diseños",
        link: "/listDesign",
      },
    ],
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Chofer",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar chofer",
        link: "/AddChofer",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de choferes",
        link: "/ListChofer",
      },
    ],
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Buses",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar Bus",
        link: "/AddBus",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de Buses",
        link: "/ListBus",
      },
    ],
  },
  {
    type: "normal",
    icon: <TiCogOutline />,
    title: "Configuracion",
    link: "/config",
  },
  {
    type: "normal",
    icon: <AiOutlineLogout />,
    title: "Cerrar Sesión",
    onClick : () => {
      const election = window.confirm("¿Deseas cerrar tu sesión?"); 

      if(election) 
        auth().signOut();
    }
  },
];

export default configSideBar;
