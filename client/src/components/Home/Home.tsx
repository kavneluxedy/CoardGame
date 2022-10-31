import React, { useContext, useEffect } from "react";
import CardGameLobby from "../Lobby";
import { AppContext } from "../../utils/ContextProvider";
import Button from "../Button";
import Modal from "../Modal";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Admin from "../Admin/Admin";

const Home = () => {
	const AppCtx = useContext(AppContext);
	if (AppCtx === null) { return <></>; }
	const { user, setUser, modalName, setModalName, setModalVisibility } = { ...AppCtx }


	const handleLogout = () => {
		(window.confirm("SE DÉCONNECTER ?")) ? setUser({isConnected: false}) : console.log("Vous êtes rester connecté !")
	}

	return (
		<>
			{user.isConnected && user.role === "admin" &&
				<Button
					className="open"
					onClick={() => {
						setModalVisibility(true);
						setModalName("admin");
					}}
				>
					ADMINISTRATEUR
				</Button>
			}

			<Button
				className="open"
				onClick={() => {
					setModalVisibility(true);
					setModalName("lobby");
				}}
			>
				PARTIE PUBLIC
			</Button>


			{!user.isConnected &&
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


			{!user.isConnected &&
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


			{user.isConnected &&
				<Button className="open" onClick={() => handleLogout()}>
					SE DÉCONNECTER
				</Button>
			}


			{(() => {

				switch (modalName) {

					case "admin":
						return <Admin />

					case "lobby":
						return <CardGameLobby />;

					case "register":
						return (<Modal
							title={"Créer un compte"}
						>
							<Register />
						</Modal>);

					case "login":
						return <Modal
							title={"Authentification"}
						>
							<Login />
						</Modal>;

					case "admin":
						return <Admin />

					default:
						return null;
				}
			})()}
		</>
	);
};

export default Home
