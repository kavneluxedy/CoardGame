import React, {
	FC,
	useState,
} from "react";
import { LobbyRendererProps } from "../CoardsGameLobby";
import { AllPictures } from "../../../assets/images/AllPictures";
import Button from "../../layout/misc/Button";

const EnterLobbyView: FC<{ L: LobbyRendererProps }> = ({ L }) => {
	const [img, setImg] = useState(
		localStorage.getItem("player_avatar") || AllPictures[0]
	);
	const [playerName, setPlayerName] = useState<string>(L.playerName);

	const handleAvatar = (): void => {
		let i: number = AllPictures.indexOf(img);
		if (i === AllPictures?.length - 1) {
			i = 0;
		} else {
			i++;
		}
		setImg(AllPictures[i]);
		localStorage.setItem("player_avatar", AllPictures[i]);
	};

	const enterLobby = () => {
		if (playerName !== "") {
			L.handleEnterLobby(playerName);
		}
	};

	return (
		<div className="go">
			<input
				id="go-playerName"
				type="text"
				placeholder="Your Nickname"
				onChange={(e) => {
					setPlayerName(e.target.value);
				}}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						enterLobby();
					}
				}}
			/>
			<img
				id="go-playerImage"
				src={img}
				onClick={handleAvatar}
				alt="Avatar de votre Roi"
			/>
			<div id="go-deck">
				<div id="go-deckChoice">Deck Choice</div>
				<div id="go-deckChoice">Deck Choice</div>
				<div id="go-deckChoice">Deck Choice</div>
				<div id="go-deckDetails">Deck Details</div>
			</div>

			<Button onClick={() => enterLobby()}>JOUER !</Button>
		</div>
	);
};

export { EnterLobbyView };
