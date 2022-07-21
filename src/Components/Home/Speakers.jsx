import React from "react";
import SpeakerDetails from "../../Data/SpeakersDetails";
import Container from "../../Layout/Container";
import Card from "./Speakers/Card";
import "./Styles/Speakers.css";

const Speakers = () => {
	return (
		<Container className="speakers">
			<div className="speaker__title">
				<h1 className="title">Speakers</h1>
			</div>
			<div className="speaker__cards">
				{SpeakerDetails.map((speaker) => (
					<Card
						name={speaker.name}
						details={speaker.details}
						image={speaker.image}
						socials={speaker.social}
						key={speaker.name}
					/>
				))}
			</div>
		</Container>
	);
};

export default Speakers;
