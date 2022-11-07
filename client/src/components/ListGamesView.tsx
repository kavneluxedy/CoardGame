import React from "react";
import { LobbyAPI } from "boardgame.io";
import Button from "./Button";
import { LobbyRendererProps } from "./Lobby";

function createMatchButtons(
  L: LobbyRendererProps,
  m: LobbyAPI.Match,
  numPlayers: number,
  closeModal: void
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
            // eslint-disable-next-line
            closeModal;
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

const ListGamesView: React.FC<{ L: LobbyRendererProps }> = ({
  L,
}): JSX.Element => {
  const matches: LobbyRendererProps["matches"] = [];
  const seen = new Set<string>();
  for (const m of L.matches) {
    if (!seen.has(m.matchID)) {
      matches.push(m);
      seen.add(m.matchID);
    }
  }

  return (
    <div className="go">
      <div className="">Salut {L.playerName} !</div>
      <br />
      <div className="">
        <Button
          onClick={() => {
            L.handleCreateMatch(L.gameComponents[0].game.name!, 2);
          }}
          className={"button-create"}
        >
          Créer une partie
        </Button>
      </div>

      <div className="text-lg">
        <div className="underline modal-title">
          <b>PARTIES PUBLIQUES</b>
        </div>
      </div>
      {matches.map((m) => (
        <div className="room-seat" key={m.matchID}>
          <div>
            <b>Jeu: {m.gameName}</b>
          </div>
          <div>
            {m.players.map((p) => p.name ?? "[Place Disponible]").join(", ")}
          </div>
          {createMatchButtons(L, m, 2)}
        </div>
      ))}

      <Button
        onClick={() => {
          L.handleExitLobby();
        }}
        className={"button-exit"}
      >
        Quitter le lobby
      </Button>
    </div>
  );
};

export default ListGamesView;
