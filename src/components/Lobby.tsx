import React, { Dispatch, SetStateAction, ComponentType, useEffect, useContext } from 'react'
import { Client, Lobby as ReactLobby } from "boardgame.io/react"
import { CardGame } from '../components/Game/Game'
import { Board } from '../components/Game/Board'
import { Game, LobbyAPI, Server } from 'boardgame.io'
import RunningMatchView from "./RunningMatchView"
import { EnterLobbyView } from "./EnterLobbyView"
import ListGamesView from "./ListGamesView"
import Modal from './Modal'
import { AppContext, IAppContext } from '../App'

enum LobbyPhases {
	ENTER = "enter",
	PLAY = "play",
	LIST = "list",
}

interface MatchOpts {
	numPlayers: number;
	matchID: string;
	playerID?: string;
}

interface RunningMatch {
	app: ReturnType<typeof Client>;
	matchID: string;
	playerID: string;
	credentials?: string;
}

interface GameComponent {
	game: Game;
	board: ComponentType<any>;
}

interface CardGameLobbyProps { }

export interface LobbyRendererProps {
	errorMsg: string;
	gameComponents: GameComponent[];
	matches: LobbyAPI.MatchList["matches"];
	phase: LobbyPhases;
	playerName: string;
	runningMatch?: RunningMatch;
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
	handleStartMatch: (gameName: string, matchOpts: MatchOpts) => void;
}

const port = process.env.REACT_APP_PORT;


const CardGameLobby: React.FC = () => {
	const { modalVisible, setModalVisibility } = useContext<IAppContext>(AppContext)
	let serverAddr = `${window.location.protocol}//${window.location.hostname}`
	if (port) {
		serverAddr += ":" + port;
	}

	return (
		<ReactLobby
			gameServer={"http://localhost:8000"}
			lobbyServer={"http://localhost:8080"}
			gameComponents={[{ game: CardGame, board: Board }]}
			renderer={(L) => {
				return (
					<div className="">
						{L.phase === LobbyPhases.ENTER && 
							<Modal title={"Personnaliser votre partie"} modalVisible={modalVisible} setModalVisibility={setModalVisibility}>
								<EnterLobbyView L={L} />
							</Modal>
						}
						{L.phase === LobbyPhases.LIST && 
							<Modal title={"Personnaliser votre partie"} modalVisible={modalVisible} setModalVisibility={setModalVisibility}>
								<ListGamesView L={L} />
							</Modal>
						}
						{L.phase === LobbyPhases.PLAY && <RunningMatchView L={L} />}
					</div>
				)
			}}
		/>
	)
}

export type Match = Omit<Server.MatchData, "players"> & {
	matchID: string
	players: Omit<Server.PlayerMetadata, "credentials">[]
}

export default CardGameLobby