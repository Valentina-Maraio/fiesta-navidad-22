import React from "react";
import "./styles/BannerStyle.css";
import cucina from '../../assets/cucina.jpg'
import Title from '../title/Title'

const HomeBanner = () => {
  return (
    <>
    <div style={{ 
      backgroundImage: `url(${cucina})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:"cover"
    }}>
      <Title/>
    </div>
    </>
  );
};

export default HomeBanner;
