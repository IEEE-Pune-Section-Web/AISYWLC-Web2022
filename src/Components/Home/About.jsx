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
							With its theme “Transforming India for a Better Tomorrow”, AISYWLC
							'22 aims to kindle a spark in the minds of the attendees with it's
							diverse and inclusive talks, expert sessions and panel discussions
							by notable speakers from all walks of life. The Congress not only
							focuses on highlighting the achievements and accolades of the
							nation but also primarily aims at bringing about the much needed
							welcome change in various fields. The Congress is an amalgamation
							of people all across India coming together and celebrating the
							beautiful blend of their cultures and vibrant ideas.
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
