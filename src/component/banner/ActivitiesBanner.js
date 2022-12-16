import React from "react";
import "./styles/BannerStyle.css";
import games from '../../assets/games/games.jpg'
import GamesTitle from "../title/GamesTitle";

const ActivitiesBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${games})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <GamesTitle />
      </div>
    </>
  );
};

export default ActivitiesBanner;
