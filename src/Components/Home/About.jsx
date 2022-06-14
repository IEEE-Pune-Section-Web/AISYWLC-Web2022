import React from "react";
import Container from "../../Layout/Container";
import "./Styles/About.css";

export default function About() {
	return (
		<>
			<Container className="About">
				<div className="About__content">
					<h4 className="About__branding">What we are about</h4>
					<h1 className="About__title">
						Transforming India for a Better Tomorrow
					</h1>
					<div className="About__text">
						<p>
							AISYWLC is the annual flagship event of IEEE India Council which
							administers a platform to young professionals, academicians,
							scholars, entrepreneurs and technocrats from divergent fields and
							careers to show up together and share a common podium.
						</p>
						<p>
							<span className="About_Theme">*About Theme*</span>Class aptent
							taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
							scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
							rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
							convallis convallis diam sit amet lacinia. Aliquam in elementum
							tellus.
						</p>
					</div>
				</div>

				<div className="About__video">
					<video src="#"></video>
				</div>
			</Container>
		</>
	);
}
