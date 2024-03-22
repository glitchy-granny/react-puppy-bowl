import "./App.css";
/*const renderPlayer = (player) => {
  const PLAYER_CONTAINER = document.createElement("div");
  const PLAYER_NAME = document.createElement("p");
  const PLAYER_IMG = document.createElement("img");
  const PLAYER_DELETE_BUTTON = document.createElement("button");
  const PLAYER_SHOW_DETAILS_BUTTON = document.createElement("button");
  PLAYER_CONTAINER.append(
    PLAYER_NAME,
    PLAYER_IMG,
    PLAYER_DELETE_BUTTON,
    PLAYER_SHOW_DETAILS_BUTTON
  );

  PLAYER_NAME.textContent = player.name;
  PLAYER_IMG.src = player.imageUrl;
  PLAYER_DELETE_BUTTON.textContent = "Remove Player";
  PLAYER_SHOW_DETAILS_BUTTON.textContent = "Player Details";

  PLAYER_CONTAINER.classList.add("player-container");
  PLAYER_NAME.classList.add("player-name");
  PLAYER_IMG.classList.add("player-img");

  PLAYER_DELETE_BUTTON.addEventListener("click", async () => {
    await removePlayer(player.id);

    fetchAllPlayers();
  });

  PLAYER_SHOW_DETAILS_BUTTON.addEventListener("click", () => {
    const detailsMessage = `
    BREED: ${player.breed}
    STATUS: ${player.status}
    TEAMID: ${player.teamId}
    COHORTID: ${player.cohortId}
    `;
    alert(detailsMessage);
  });

  return PLAYER_CONTAINER;
};*/
const testPlayer = {
  id: 134,
  name: "Huck",
  breed: "Miniature Poodle / Shih Tzu",
  status: "bench",
  imageUrl:
    "http://r.ddmcdn.com/w_962/s_f/o_1/cx_25/cy_0/cw_962/ch_1443/APL/uploads/2019/12/Huck-PBXVI.jpg",
  createdAt: "2024-02-28T20:54:10.616Z",
  updatedAt: "2024-02-28T20:54:10.616Z",
  teamId: 25,
  cohortId: 13,
};

function PlayerCard({ name, imageUrl }) {
  return (
    <div className="player-container">
      <p className="player-name">{name}</p>
      <img className="player-img" src={imageUrl}></img>
      <button>DETAILS</button>
      <button>DELETE</button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <PlayerCard name="Bo" imageUrl={testPlayer.imageUrl} />
      <PlayerCard name="JJ" imageUrl={testPlayer.imageUrl} />
      <PlayerCard name="Kip" imageUrl={testPlayer.imageUrl} />
      <PlayerCard name="Dog" imageUrl={testPlayer.imageUrl} />
    </>
  );
}

export default App;
