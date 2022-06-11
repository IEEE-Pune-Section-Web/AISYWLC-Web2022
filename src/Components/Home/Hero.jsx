import React from "react";
import Container from "../../Layout/Container";
import Counter from "./Hero/Counter";
import Info from "./Hero/Info";
import "./Styles/Hero.css";
const Hero = () => {
  return (
    <Container className="hero">
      <div className="hero__content">
        <div className="hero__branding">
          <img src="./Assets/IEEE.png" alt="IEEE Logo" />
        </div>
          <h1 className="hero__title">
            ALL <span className="india">INDIA</span> STUDENT YOUNG PROFESSIONAL
            WOMEN IN ENGINEERING AND LIFE MEMBER
            <span className="blue"> CONGRESS '22</span>
          </h1>
          <div className="hero__info">
            <Info/>
            <Info/>
          </div>
          <div className="hero__counter">
            <Counter/>
          </div>
      </div>
      <div className="hero__ticket"></div>
    </Container>
  );
};

export default Hero;
