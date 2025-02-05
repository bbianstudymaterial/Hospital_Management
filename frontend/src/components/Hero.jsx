import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          MCare Hospital Institute Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Expedita reiciendis natus incidunt nobis facere
          placeat eveniet! Deserunt voluptatum adipisci ullam unde officia
          numquam maxime. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores, architecto.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
