import React, { useContext, useEffect } from "react";
import CardGameLobby from "../Lobby";
import { AppContext, IAppContext } from "../../App";
import Button from "../Button";
import Modal from "../Modal";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import { userInfo } from "os";

const Home = () => {
	const { userSession, setUserSession, modalVisible, setModalVisibility, modalName, setModalName } =
		useContext<IAppContext>(AppContext);



	const handleLogout = () => {
		(window.confirm("SE DÉCONNECTER ?")) ? setUserSession({}) : console.log("Vous êtes rester connecté !")
	}



	return (
		<>
			<Button
				className="open"
				onClick={() => {
					setModalVisibility(true);
					setModalName("lobby");
				}}
			>
				PARTIE PUBLIC
			</Button>


			{!userSession.isConnected &&
				<Button
					className="open"
					onClick={() => {
						setModalVisibility(true);
						setModalName("register");
					}}
				>
					CREER UN COMPTE
				</Button>
			}


			{!userSession.isConnected &&
				<Button
					className="open"
					onClick={() => {
						setModalVisibility(true);
						setModalName("login");
					}}
				>
					SE CONNECTER
				</Button>
			}


			{userSession.isConnected &&
				<Button className="open" onClick={() => handleLogout()}>
					SE DÉCONNECTER
				</Button>
			}


			{(() => {

				switch (modalName) {

					case "lobby":
						return <CardGameLobby />;

					case "register":
						return <Modal
							title={"Créer un compte"}
							modalVisible={modalVisible}
							setModalVisibility={setModalVisibility}
						>
							<Register />
						</Modal>;

					case "login":
						return <Modal
							title={"Authentification"}
							modalVisible={modalVisible}
							setModalVisibility={setModalVisibility}
						>
							<Login />
						</Modal>;

					default:
						return null;
				}
			})()}
		</>
	);
};

export default Home
