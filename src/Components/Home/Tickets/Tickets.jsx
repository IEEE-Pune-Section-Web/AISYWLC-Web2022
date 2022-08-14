import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/Tickets.css";

export default function Tickets({ type, benefits, price, link }) {
	return (
		<>
			<div className="ticket">
				<div className="left">
					<div className="ticket-left">
						<div className="circle"></div>
						<div className="admit-one">
							<span>{type ?? "/nIEEE Members"}</span>
						</div>
					</div>
					<div className="ticket-info">
						<ul>
							{/* {benefits & benefits.map((benefit) => <li>{benefit}</li>)} */}
							<li>• Offline Session from October 7th to 9th</li>
							<li>• Accomodation and food</li>
							<li>• Delegate kits</li>
							<li>• Chance to win amazing  prizes</li>
							<li>• Increase your connect with like-minded individuals</li>
						</ul>
						<div className="price">
							<h2>{price ?? "₹4000"}</h2>
						</div>
						<CTA_button type={"primary"}><a href="https://www.townscript.com/e/aisywlc22-340012">Register Now!</a></CTA_button>
					</div>
				</div>
			</div>
			<div className="ticket">
				<div className="left">
					<div className="ticket-left">
						<div className="circle"></div>
						<div className="admit-one">
							<span>{type ?? "Non-IEEE Members"}</span>
						</div>
					</div>
					<div className="ticket-info">
						<ul>
							{/* {benefits & benefits.map((benefit) => <li>{benefit}</li>)} */}
							<li>• Offline Session from October 7th to 9th</li>
							<li>• Accomodation and food</li>
							<li>• Delegate kits</li>
							<li>• Chance to win amazing  prizes</li>
							<li>• Increase your connect with like-minded individuals</li>
						</ul>
						<div className="price">
							<h2>{price ?? "₹5000"}</h2>
						</div>
						<CTA_button type={"primary"}><a href="https://www.townscript.com/e/aisywlc22-340012">Register Now!</a></CTA_button>
					</div>
				</div>
			</div>
		</>
	);
}
