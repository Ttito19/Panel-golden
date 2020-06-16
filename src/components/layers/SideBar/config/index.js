import React from "react";
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
        link: "/AddBus",
      },
      {
        icon: <AiOutlineTable />,
        title: "Lista de paraderos",
        link: "/ListBus",
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
    type: "normal",
    icon: <TiCogOutline />,
    title: "Configuracion",
    link: "",
  },

  {
    type: "normal",
    icon: <AiOutlineLogout />,
    title: "Cerrar Sesión",
    link: "",
  },
];

export default configSideBar;
