import React, { useContext } from "react";
import CardGameLobby from "../Lobby";
import { AppContext, IAppContext } from "../../App";
import Button from "../Button";

const Home = () => {
  const { modalVisible, setModalVisibility } =
    useContext<IAppContext>(AppContext);

  return (
    <>
      <Button className="open" onClick={() => setModalVisibility(true)}>
        PARTIE PUBLIC
      </Button>
      <CardGameLobby />
    </>
  );
};

export { Home };
