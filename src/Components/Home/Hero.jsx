import React from "react";
import { calenderIll, mapIll, ticketIll } from "../../Data/Illustration";
import Container from "../../Layout/Container";
import CTA_button from "../CTA_button";
import Counter from "./Hero/Counter";
import Info from "./Hero/Info";
import "./Styles/Hero.css";
import bg from "../../../Assets/background.jpeg";
import branding from "../../../Assets/IEEE.png";
const Hero = () => {
	return (
		<Container
			className="hero"
			style={bg && { backgroundImage: `url(.${bg})` }}
		>
			<div className="hero__content">
				<div className="hero__branding">
					<img src={branding} alt="IEEE Logo" />
				</div>
				<h1 className="hero__title">
					ALL <span className="india">INDIA</span> STUDENT YOUNG PROFESSIONAL
					WOMEN IN ENGINEERING AND LIFE MEMBER
					<span className="blue"> CONGRESS '22</span>
				</h1>
				<div className="hero__info">
					<Info icon={calenderIll} key="date" text={"October 8th, 2022"} />
					<Info
						icon={mapIll}
						key="venue"
						text={"College of Engineering Pune, Pune"}
					/>
				</div>
				<div className="hero__counter">
					<Counter />
				</div>
				<div className="hero__cta">
					<CTA_button icon={ticketIll}>Buy Now</CTA_button>
				</div>
			</div>
			<div className="hero__ticket"></div>
		</Container>
	);
};

export default Hero;
