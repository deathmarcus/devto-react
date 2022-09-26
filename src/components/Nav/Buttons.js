import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import ButtonsLoggedIn from "./ButtonsLoggedIn";
import ButtonsNotLogged from "./ButtonsNotLogged";

const Buttons = () => {
  const { user } = useContext(UserContext);

  return <>{user ? <ButtonsLoggedIn /> : <ButtonsNotLogged />}</>;
};

export default Buttons;
