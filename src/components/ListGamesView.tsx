import React, { useState } from "react";
import { LobbyAPI } from "boardgame.io";
import Button from "./Button";
import { LobbyRendererProps } from "./Lobby";

function createMatchButtons(
	L: LobbyRendererProps,
	m: LobbyAPI.Match,
	numPlayers: number
): JSX.Element {
	const playerSeat = m.players.find((p) => p.name === L.playerName);
	const freeSeat = m.players.find((p) => !p.name);
	if (playerSeat && freeSeat) {
		// already seated: waiting for match to start
		return (
			<Button
				onClick={() => {
					L.handleLeaveMatch(m.gameName, m.matchID);
				}}
			>
				Leave
			</Button>
		);
	}
	if (freeSeat) {
		// at least 1 seat is available
		return (
			<Button
				onClick={() => {
					L.handleJoinMatch(m.gameName, m.matchID, "" + freeSeat.id);
				}}
			>
				Join
			</Button>
		);
	}
	// match is full
	if (playerSeat) {
		return (
			<>
				<Button
					onClick={() => {
						L.handleStartMatch(m.gameName, {
							numPlayers,
							playerID: "" + playerSeat.id,
							matchID: m.matchID,
						});
					}}
				>
					Play
				</Button>
				<Button
					onClick={() => {
						L.handleLeaveMatch(m.gameName, m.matchID);
					}}
				>
					Leave
				</Button>
			</>
		);
	}
	// TODO add spectate button
	return <div>TODO add spectate button</div>;
}

const ListGamesView: React.FC<{ L: LobbyRendererProps }> = ({ L }) => {
	const [numPlayers, setNumPlayers] = useState(2);
	const matches: LobbyRendererProps["matches"] = []
	const seen = new Set<string>()
	for (const m of L.matches) {
		if (!seen.has(m.matchID)) {
			matches.push(m)
			seen.add(m.matchID)
		}
	}

	return (
		<div className="go-wrapper">
			<div className="p-2">
				<div className="w-full flex justify-center">
					<div className="flex-grow max-w-lg">
						<div className="text-center">Salut {L.playerName} !</div> {/* //! Sauvegarder en local et/ou sur le serveur, empêche de joueur avec 2 onglets pour tester le 1V1 en local, conseil => Utiliser plusieurs navigateurs */}
						<br />
						<div className="flex justify-evenly gap-1 items-center">
							<label htmlFor="playerCount">Nombre de joueurs: </label>
							<select
								className="flex-grow"
								name="playerCount"
								id="playerCountSelect"
								defaultValue={"2"}
								onChange={({ target: { value } }) => {
									setNumPlayers(parseInt(value));
								}}
							>
								<option value="2">2</option>
							</select>
							<Button
								onClick={() => {
									L.handleCreateMatch(L.gameComponents[0].game.name!, numPlayers);
								}}
							>
								Créer une partie
							</Button>
						</div>

						<div className="text-lg"><b>PARTIES PUBLIQUES</b></div>
						{matches.map((m) => (
							<div
								className="flex gap-3 justify-between items-center border-b-2 border-black"
								key={m.matchID}
							>
								<div><b>Jeu: {m.gameName}</b></div>
								<div>{m.players.map((p) => p.name ?? "[Place Disponible]").join(", ")}</div>
								{/* JSON.stringify() => Petit test pour checker toutes les metadatas du joueur, j'ai remarqué qu'à cet endroit, même si le joueur n'a pas encore rejoins, son future slot possède déjà un ID prédéfini, 0 ou 1 // ! REMETTRE p.name */}
								{createMatchButtons(L, m, numPlayers)}
							</div>
						))}
					</div>
				</div>
			</div>
			<Button
				onClick={() => {
					L.handleExitLobby();
				}}
			>
				Quitter le lobby
			</Button>
		</div>
	);
};

export default ListGamesView