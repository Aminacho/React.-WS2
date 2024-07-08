import "./App.css";

import PlayersListe from "./components/PlayersListe";

function App() {
  return (
    <div className="App">
      <h1>
        <i> 🤺 Amina's Player App ⚔️ </i>
      </h1>
      <div className="body">
        <PlayersListe>
          <h2> Classements </h2>
        </PlayersListe>
      </div>
    </div>
  );
}

export default App;
