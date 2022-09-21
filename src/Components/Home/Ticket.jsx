import React from "react";
import Container from "../../Layout/Container";
import Tickets from "./Tickets/Tickets";
import ExtraCTA from "./Tickets/ExtraCTA";
import "./Styles/Ticket.css";

const accbenefits = [
	"• Offline Session from October 7th to 9th",
	"• Accomodation and food",
	"• Delegate kits",
	"• Chance to win amazing  prizes",
	"• Increase your connect with like-minded individuals",
	"• GFG Discount Coupons worth Rs. 500",
];
const noaccbenefits = [
	"• Offline Session from October 7th to 9th",
	"• Lunch and Dinner",
	"• Delegate kits",
	"• Chance to win amazing  prizes",
	"• Increase your connect with like-minded individuals",
	"• GFG Discount Coupons worth Rs. 500",
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
					benefits={accbenefits}
					price={4000}
					link={"https://www.townscript.com/e/aisywlc22-340012"}
					isdisabled={true}
				/>
				<Tickets
					type="Non-IEEE Members"
					benefits={accbenefits}
					price={5000}
					link={"https://www.townscript.com/e/aisywlc22-340012"}
					isdisabled={true}
				/>
				<Tickets
					type="IEEE Members (No Accomodation)"
					benefits={noaccbenefits}
					price={2500}
					link={"https://www.townscript.com/e/aisywlc22-340012"}
					isdisabled={true}
				/>
				<Tickets
					type="Non-IEEE Members (No Accomodation)"
					benefits={noaccbenefits}
					price={3500}
					link={"https://www.townscript.com/e/aisywlc22-340012"}
					isdisabled={true}
				/>
			</div>

			<div className="extraCTAs">
				<ExtraCTA
					title="National Integrity exhibition registration"
					link="https://forms.gle/kNh7qX4xZ65XQhx59"
				/>
				<ExtraCTA
					title="Cultural night registration"
					link=" https://forms.gle/Bds1o8WU5fzwCQ9v9"
				/>
			</div>
		</Container>
	);
}
