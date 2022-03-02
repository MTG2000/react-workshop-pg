import { useState } from "react";
import "./games-app-styles.css";
import GamesList from "./components/GamesList";
import Tags from "./components/Tags";

function GamesApp() {
  const [selectedTag, setSelectedTag] = useState("");
  document.title = "Games App";

  return (
    <div className="games-app">
      <div className="container">
        <Tags
          selectedTag={selectedTag}
          handleChangeTag={(tag) => setSelectedTag(tag)}
        />
        <GamesList selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default GamesApp;
