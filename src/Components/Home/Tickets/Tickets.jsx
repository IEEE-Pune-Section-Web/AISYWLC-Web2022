import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/Tickets.css";

export default function Tickets({ type, benefits, price, link }) {
	const openLink = () => {
		window.open(link, "_blank");
	};
	return (
		<div className="ticket">
			<div className="left">
				<div className="ticket-left">
					<div className="circle"></div>
					<div className="admit-one">
						<span>{type ?? "IEEE Members"}</span>
					</div>
				</div>
				<div className="ticket-info">
					<ul>{benefits && benefits.map((benefit) => <li>{benefit}</li>)}</ul>
					<div className="price">
						<h2>₹{price}</h2>
					</div>
					<CTA_button onClick={openLink} type={"primary"}>
						Register Now!
					</CTA_button>
				</div>
			</div>
		</div>
	);
}
