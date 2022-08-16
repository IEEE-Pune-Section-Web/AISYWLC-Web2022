import React from "react";
import Container from "../../Layout/Container";
import Tickets from "./Tickets/Tickets";
import "./Styles/Ticket.css";

const commonbenefits = [
	"• Offline Session from October 7th to 9th",
	"• Accomodation and food",
	"• Delegate kits",
	"• Chance to win amazing  prizes",
	"• Increase your connect with like-minded individuals",
];
export default function Ticket() {
	return (
		<Container className="Ticket">
			<div className="Ticket_Header">
				<h1 className="Ticket_title">GRAB A TICKET</h1>
			</div>

			<div className="Ticket_Cards">
				<Tickets
					type="IEEE Members"
					benefits={commonbenefits}
					price={4000}
					link={"https://www.townscript.com/e/aisywlc22-340012"}
				/>
				<Tickets
					type="Non-IEEE Members"
					benefits={commonbenefits}
					price={5000}
					link={"https://www.townscript.com/e/aisywlc22-340012"}
				/>
			</div>
		</Container>
	);
}
