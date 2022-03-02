import React, { useEffect, useState } from "react";
import GameCard from "./GameCard/GameCard";
import API from "../api";
import ReactLoading from "react-loading";

export default function GamesList({ selectedTag }) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // API.getGames().then((games) => {
  //   setGames(games);
  // });

  useEffect(() => {
    let isCancelled = false;

    setIsLoading(true);
    API.getGames(selectedTag).then((games) => {
      if (isCancelled) return;
      setIsLoading(false);
      setGames(games);
    });

    console.log(`Mounted ${selectedTag}`);

    return () => {
      console.log(`UnMounted ${selectedTag}`);
      isCancelled = true;
    };
  }, [selectedTag]);

  if (isLoading)
    return (
      <div className="loading">
        <ReactLoading type="bars" color="white" height={112} width={112} />
      </div>
    );

  return (
    <div className="games">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          img={game.img}
          tags={game.tags}
        />
      ))}
    </div>
  );
}
