import React, { useContext } from "react";
import Button from "../Button";
import { AppContext } from "../../utils/ContextProvider";
import { useNavigate } from "react-router-dom";

const ChoiceGameType = () => {

	const nav = useNavigate();
	const navigate = (into: string) => {
		nav(into);
	}

	const AppCtx = useContext(AppContext);
	if (AppCtx === null) {
		return <></>;
	}
	const { isLobbyVisible } = { ...AppCtx };

	return (
		<div className="choice-game-type">
			{isLobbyVisible &&
				<>
					<Button
						className="open button"
						onClick={() => navigate("game")}
					>
						PARTIE PUBLIQUE
					</Button>

					<Button
						className="open button"
						onClick={() => navigate("game")}
					>
						PARTIE PRIVEE
					</Button>
				</>
			}
		</div>
	);
};

export default ChoiceGameType;