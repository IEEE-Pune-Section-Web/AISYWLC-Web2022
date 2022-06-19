import React from "react";
import Container from "../../Layout/Container";
import "./Styles/About.css";
import content from "../../Data/content";

export default function About() {
	return (
		<>
			<Container className="About">
				<div className="About__content">
					<h4 className="About__branding">{content.about.branding}</h4>
					<h1 className="About__title">{content.about.title}</h1>
					<div className="About__text">
						<p>{content.about.event}</p>
						<p>{content.about.theme}</p>
					</div>
				</div>

				<div className="About__video">
					<video src="#"></video>
				</div>
			</Container>
		</>
	);
}
