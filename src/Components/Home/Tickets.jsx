import React from "react";
import Container from "../../Layout/Container";
import "./Styles/Tickets.css";
import Ticket from "./Tickets/Ticket";

const benefits = [
	"Exciting Delegate Kit worth Rs 500",
	"Chance to win prizes worth Rs 50,000",
	" Plethora of Networking Opportunities",
	"Fun Quizzes, Ideathon and Other Events",
];
const Tickets = () => {
	return (
		<Container className={"tickets"}>
			<div className="tickets__header">
				<div className="ticker__title">
					<h1 className="title">GRAB A TICKET</h1>
				</div>
				<div className="tickets__pitches">
					<p className="tickets__pitch">
						*Ticket Common benifts *Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
						odio mattis. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos.
					</p>
					<p className="tickets__pitch">
						*Post Event Benefits*Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
						odio mattis. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos.
					</p>
				</div>
			</div>
			<div className="tickets__content">
				<Ticket benefits={benefits} />
			</div>
		</Container>
	);
};

export default Tickets;
