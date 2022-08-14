import React from "react";
import Container from "../../Layout/Container";
import Tickets from "./Tickets/Tickets";
import "./Styles/Ticket.css";

export default function Ticket() {
	return (
		<>
			<Container className="Ticket">
				<div className="Ticket_Header">
					<h1 className="Ticket_title">GRAB A TICKET</h1>
				</div>

				<div className="Ticket_Cards">
					<Tickets />
				</div>
			</Container>
		</>
	);
}
