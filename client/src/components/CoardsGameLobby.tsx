import React, { ComponentType } from "react";
import { Client, Lobby } from "boardgame.io/react";
import { CoardsGame } from "./game/Game";
import { Game, LobbyAPI, Server } from "boardgame.io";
import RunningMatchView from "./RunningMatchView";
import { EnterLobbyView } from "./EnterLobbyView";
import ListGamesView from "./ListGamesView";
import CoardsGameBoard from "./game/Board";

enum LobbyPhases {
	ENTER = "enter",
	PLAY = "play",
	LIST = "list",
}

interface IMatchOpts {
	numPlayers: number;
	matchID: string;
	playerID?: string;
}

interface IRunningMatch {
	app: ReturnType<typeof Client>;
	matchID: string;
	playerID: string;
	credentials?: string;
}

interface IGameComponent {
	game: Game;
	board: ComponentType<any>;
}

interface CoardsGameLobbyProps { }

export interface LobbyRendererProps {
	errorMsg: string;
	gameComponents: IGameComponent[];
	matches: LobbyAPI.MatchList["matches"];
	phase: LobbyPhases;
	playerName: string;
	runningMatch?: IRunningMatch;
	handleEnterLobby: (playerName: string) => void;
	handleExitLobby: () => Promise<void>;
	handleCreateMatch: (gameName: string, numPlayers: number) => Promise<void>;
	handleJoinMatch: (
		gameName: string,
		matchID: string,
		playerID: string
	) => Promise<void>;
	handleLeaveMatch: (gameName: string, matchID: string) => Promise<void>;
	handleExitMatch: () => void;
	handleRefreshMatches: () => Promise<void>;
	handleStartMatch: (gameName: string, matchOpts: IMatchOpts) => void;
}

const CoardsGameLobby = ({ Modal, handleVisibility }: { Modal: any, handleVisibility: any }) => {
	
	let serverAddr = `${window.location.protocol}//${window.location.hostname + ":8000"}`;
	let ApiAddr = `${window.location.protocol}//${window.location.hostname + ":8080"}`;

	return (
		<Lobby
			gameServer={serverAddr}
			lobbyServer={ApiAddr}
			gameComponents={[{ game: CoardsGame, board: CoardsGameBoard }]}
			refreshInterval={10000}
			debug={false}
			renderer={(L) => {
				return (
					<div className="lobby-buttons-wrapper">
						{L.phase === LobbyPhases.ENTER && (
							<Modal>
								<EnterLobbyView L={L} />
							</Modal>
						)}
						{L.phase === LobbyPhases.LIST && (
							<Modal>
								<ListGamesView L={L} handleVisibility={handleVisibility} />
							</Modal>
						)}
						{L.phase === LobbyPhases.PLAY && (
							<RunningMatchView L={L} />
						)}
					</div>
				);
			}}
		/>
	);
};

export type Match = Omit<Server.MatchData, "players"> & {
	matchID: string;
	players: Omit<Server.PlayerMetadata, "credentials">[];
};

export default CoardsGameLobby;
