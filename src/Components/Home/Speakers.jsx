import React from "react";
import Container from "../../Layout/Container";
import Card from "./Speakers/Card";
import "./Styles/Speakers.css";
const SpeakerDetails = [
	{
		name: "dum",
		image: {
			src: "https://images.unsplash.com/photo-1607805074620-5802aee47bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
			alt: "TEST SPEAKer",
		},
		details: "dummy speaker maccha",
		social: [
			{ type: "Linkedin", link: "a" },
			{ type: "Linkedin", link: "a" },
			{ type: "Linkedin", link: "a" },
		],
	},
	{
		name: "dum",
		image: {
			src: "https://images.unsplash.com/photo-1607805074620-5802aee47bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
			alt: "TEST SPEAKer",
		},
		details: "dummy speaker maccha",
		social: [
			{ type: "Linkedin", link: "a" },
			{ type: "Linkedin", link: "a" },
			{ type: "Linkedin", link: "a" },
		],
	},
	{
		name: "dum",
		image: {
			src: "https://images.unsplash.com/photo-1607805074620-5802aee47bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
			alt: "TEST SPEAKer",
		},
		details: "dummy speaker maccha",
		social: [
			{ type: "Linkedin", link: "a" },
			{ type: "Linkedin", link: "a" },
			{ type: "Linkedin", link: "a" },
		],
	},
];

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
