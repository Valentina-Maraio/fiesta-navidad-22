import React from "react";
import "./styles/BannerStyle.css";
import menu from '../../assets/menu.jpg'
import MenuTitle from "../title/MenuTitle";
import Food from '../food/Food'

const FoodBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${menu})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <MenuTitle />
      </div>
      <Food/>
    </>
  );
};

export default FoodBanner;
