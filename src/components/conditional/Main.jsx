import React from "react";
import Logged from "./Logged";
import NotLogged from "./NotLogged";

const Main = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <Logged /> : <NotLogged />}</div>;
};

export default Main;
