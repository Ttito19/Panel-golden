import React from "react";
import { auth } from "firebase";
import { AiOutlineHome, AiOutlineTable, AiOutlineLogout } from "react-icons/ai";
import { TiCogOutline } from "react-icons/ti";

const configSideBar = [
  {
    type: "normal",
    icon: <AiOutlineHome />,
    title: "Panel Principal",
    link: "/",
  },
  {
    type:"multiple",
    icon:<AiOutlineTable />,
    title:"Usuarios",
    subitems : [
      {
        icon: <AiOutlineTable />,
        title: "Agregar Usuario",
        link: "/AddUsuario"
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de Usuarios",
        link: "/ListUsuario",
      },
    ]
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
    title: "Clientes",
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
        title: "Lista de Diseños",
        link: "/design/list",
      },
      {
        icon: <AiOutlineTable />,
        title: "Crear Diseño",
        link: "/design/add",
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
    title: "Paraderos",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar paradero",
        link: "/AddBusStop",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de paraderos",
        link: "/ListBusStop",
      },
    ],
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Ubicación",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar Ubicación",
        link: "/addLocation",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de Ubicaciónes",
        link: "/listLocation",
      },
    ],
  },
  {
    type: "multiple",
    icon: <AiOutlineTable />,
    title: "Bus",
    subitems: [
      {
        icon: <AiOutlineTable />,
        title: "Agregar Bus",
        link: "/addBus",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de Buses",
        link: "/listBus",
      },
    ],
  },
  {
    type: "normal",
    icon: <TiCogOutline />,
    title: "Prueba",
    link: "./prueba",
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
