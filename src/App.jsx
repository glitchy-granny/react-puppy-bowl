import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayerView from "./components/AllPlayerView";
import SinglePlayerView from "./components/SinglePlayerview";

function App() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const getPuppies = async () => {
      try {
        const response = await axios(APIURL);
        setPuppies(response.data.players);
      } catch (err) {
        console.log(err);
      }
    };
    getPuppies();
  }, []);

  return (
    <>
      <searchBar />
      <Routes>
        <Route path="/" element={<Nav puppies={puppies} />} />

        <Route
          path="/players"
          element={<AllPlayerView puppies={puppies} setPuppies={setPuppies} />}
        />
        <Route path="/players/:id" element={<SinglePlayerView />} />
      </Routes>
      <AddPlayersForm />
    </>
  );
}

export default App;
