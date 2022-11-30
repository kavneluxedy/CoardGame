import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../utils/ContextProvider";
import Button from "../Button";
import MainRegister from "../auth/MainRegister";
import MainLogin from "../auth/MainLogin";
import useModal from "../../utils/hooks/useModal";
import ChoiceGameType from "../game/ChoiceGameType";
import Logout from "../auth/Logout";
// import menu_toggler from "../../assets/images/svg/menu-toggler.min.svg";

const Home = () => {

	// const [menuToggler, setMenuToggler] = useState<boolean>(false);
	// const handleMenuToggler = () => {
	// 	(menuToggler)
	// 		? setMenuToggler(false)
	// 		: setMenuToggler(true)
	// }

	const nav = useNavigate();
	const navigate = (into: string) => {
		navigate(into);
	}

	const { handleVisibility, Modal } = useModal();

	const AppCtx = useContext(AppContext);
	if (AppCtx === null) {
		return <></>;
	}
	const { user, isLobbyVisible } = { ...AppCtx };

	return (
		<div className="background-wrapper">

			<div className="background-wallpaper">

				{/* <div className="menu-toggler-wrapper">
					<img data-nav-menu-toggler={menuToggler} id="menu-toggler" src={menu_toggler} width="32" alt="card-menu-toggler" onClick={handleMenuToggler} />
				</div> */}

				<div className="home-wrapper">

					{user.isConnected && user.role === "admin" && (
						<>
							<Button
								className="open button"
								onClick={() => {
									nav("admin");
								}}
							>
								{/* {translate("Administrator").toLocaleUpperCase()} */}
								**ADMIN**
							</Button>
						</>
					)}

					<Button
						onClick={handleVisibility}>
						JOUER
					</Button>

					<Modal title={"JOUER"}>
						<ChoiceGameType />
					</Modal>

					{isLobbyVisible && (
						<div id="auth">
							{!user.isConnected && (
								<>
									<MainRegister />
									<MainLogin />
								</>
							)}
							{user.isConnected && <Logout />}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
