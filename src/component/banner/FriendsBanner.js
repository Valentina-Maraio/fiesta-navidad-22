import React from "react";
import "./styles/BannerStyle.css";
import friends from '../../assets/friends.jpg'
import FriendsTitle from "../title/FriendsTitle";

const FriendsBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${friends})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <FriendsTitle />
      </div>
    </>
  );
};

export default FriendsBanner;
