import React from "react";
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
    link: "",
  },

  {
    type: "normal",
    icon: <AiOutlineLogout />,
    title: "Cerrar Sesión",
    link: "/Cerrar_session"
  },
];

export default configSideBar;
