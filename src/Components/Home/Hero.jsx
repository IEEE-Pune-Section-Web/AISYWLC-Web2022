import React from 'react'
import Container from '../../Layout/Container'
import './Styles/Hero.css'
const Hero = () => {
  return (
    <Container className="hero">
     
            <div className="hero__content">
                <div className="hero__branding">
                    <img src="./Assets/IEEE.png" alt="IEEE Logo" />
                    <h1 className="hero__title">ALL <span className="india">INDIA</span> STUDENT YOUNG PROFESSIONAL
WOMEN IN ENGINEERING 
AND LIFE MEMBER<span className="blue"> CONGRESS '22</span></h1>
                    <div className="hero__info"></div>
                    <div className="hero__counter"></div>
                </div>
            </div>
            <div className="hero__ticket"></div>
        
    </Container>
  )
}

export default Hero