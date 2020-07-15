import { useState, useContext } from "react";
import { firestore } from "reactfire";
import { AccountContext } from "../context/accountContext";

const useUsuario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("Administrador Golden");
  const [avatar, setAvatar] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("moderator");

  const db = firestore().firestore();

  const { registerUser } = useContext(AccountContext);

  const changeUsername = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeNickName = (e) => {
    setNickName(e.target.value);
  };
  const changeTipoUsuario = (e) => {
    setTipoUsuario(e.target.value);
  };

  const createUser = () => {
    registerUser({ email, password, nickName, avatar, tipoUsuario });
  };

  const getUserData = () => {};

  return {
    changeUsername,
    changePassword,
    changeNickName,
    changeTipoUsuario,
    createUser,
  };
};

export default useUsuario;
