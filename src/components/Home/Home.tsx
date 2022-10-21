import React, { useContext } from "react";
import CardGameLobby from "../Lobby";
import { AppContext, IAppContext } from "../../App";
import Button from "../Button";
import Modal from "../Modal";
import Register from "../Auth/Register";

const Home = () => {
  const { modalVisible, setModalVisibility, modalName, setModalName } =
    useContext<IAppContext>(AppContext);

  return (
    <>
      <Button className="open" onClick={() => { setModalVisibility(true); setModalName("lobby") }}>
        PARTIE PUBLIC
      </Button>
      <Button className="open" onClick={() => { setModalVisibility(true); setModalName("register") }}>
        CREER UN COMPTE
      </Button>
      <Button className="open" onClick={() => { setModalVisibility(true); setModalName("login") }}>
        SE CONNECTER
      </Button>
      {/* <Button className="open" onClick={() => setModalVisibility(false)}>
        SE DÉCONNECTER
      </Button> */}
      {(() => {
        switch (modalName) {
          case 'lobby':
            return <CardGameLobby />
          case 'register':
            return <Register />
          default:
            return null
        }
      })}
    </>
  );
};

export { Home };
