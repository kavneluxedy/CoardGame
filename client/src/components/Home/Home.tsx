import React, { useContext } from "react";
import AppContext from "../../utils/ContextProvider";
import Button from "../Button";
import MainRegister from "../auth/MainRegister";
import MainLogin from "../auth/MainLogin";
import useModal from "../../utils/hooks/useModal";
import ChoiceGameType from "../home/ChoiceGameType";
import HomepageMenu from "./HomepageMenu";

const Home = () => {
	const { handleVisibility, Modal } = useModal();

	const AppCtx = useContext(AppContext);
	if (AppCtx === null) {
		return <></>;
	}
	const { user, isLobbyVisible } = { ...AppCtx };

	return (
		<>
			<div className="background-wrapper">

				<div className="home-wrapper">

					<div className="hidden"></div>

					<div className="absolute-height">
						<Button
							onClick={handleVisibility}>
							JOUER
						</Button>
					</div>


					{isLobbyVisible && (
						<div id="auth">
							{!user.isConnected && (
								<>
									<MainRegister />
									<MainLogin />
								</>
							)}
						</div>
					)}

					<HomepageMenu />

					<Modal title={"JOUER"}>
						<ChoiceGameType />
					</Modal>

				</div>
			</div>
		</>
	);
};

export default Home;