import React, { useContext, useEffect } from "react";
import CardGameLobby from "../Lobby";
import { AppContext, IAppContext } from "../../App";
import Button from "../Button";
import Modal from "../Modal";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import { Logout } from "../Auth/Logout";
import Svg from "../Svg";

const Home = () => {
	const { user, setUser, modalVisible, setModalVisibility, modalName, setModalName } = useContext<IAppContext>(AppContext);

	const HandleLogout = () => {
		Logout(setUser);
	}

	return (
		<>
			<Svg width={64} height={64} />

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
				<Button className="open" onClick={HandleLogout}>
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