import React from "react";
import { useNavigate } from "react-router";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-container">
        <h1>Cat Lover Social Media</h1>
        <button onClick={() => navigate("/follow")}>Find New Friends</button>
      </div>
    </>
  );
};

export default Hero;
