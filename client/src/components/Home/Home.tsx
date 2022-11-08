import React, { useContext, useState } from "react";
import CardGameLobby from "../Lobby";
import { AppContext } from "../../utils/ContextProvider";
import Button from "../Button";
import Modal from "../Modal";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Admin from "../admin/Admin";
import menu_toggler from "../../assets/images/svg/menu-toggler.min.svg";

const Home = () => {

	const AppCtx = useContext(AppContext);
	if (AppCtx === null) { return <></>; }
	const { user, setUser, modalName, setModalName, setModalVisibility, translate, menuToggler, setMenuToggler } = { ...AppCtx }

	const handleMenuToggler = () => {
		(menuToggler === "none")
			? setMenuToggler("visible")
			: setMenuToggler("none")
	}

	return (
		<>
			<div className="menu-toggler-wrapper">
				<img data-nav-menu-toggler={menuToggler} id="menu-toggler" src={menu_toggler} width="32" alt="card-menu-toggler" onClick={handleMenuToggler} />
			</div>
			{/* {user.isConnected && user.role === "admin" &&
				<Button
					className="open"
					onClick={() => {
						setModalVisibility(true);
						setModalName("admin");
					}}
				>
					{translate("Administrator").toLocaleUpperCase()}

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

			{
				!user.isConnected &&
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

			{
				!user.isConnected &&
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
 */}
			{
				(() => {

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

						default:
							break;
					}
				})()
			}
		</>
	);
};

export default Home
