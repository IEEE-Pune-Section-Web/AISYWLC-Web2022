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
							<span>{type ?? "IEEE Student Members"}</span>
						</div>
					</div>
					<div className="ticket-info">
						<ul>
							{/* {benefits & benefits.map((benefit) => <li>{benefit}</li>)} */}
							<li>Lorem Ipsum is simply dummy text of the printing an</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
						</ul>
						<div className="price">
							<h2>{price ?? "price"}</h2>
						</div>
						<CTA_button type={"primary"}>Buy Now</CTA_button>
					</div>
				</div>
			</div>
			<div className="ticket">
				<div className="left">
					<div className="ticket-left">
						<div className="circle"></div>
						<div className="admit-one">
							<span>{type ?? "IEEE Student Members"}</span>
						</div>
					</div>
					<div className="ticket-info">
						<ul>
							{/* {benefits & benefits.map((benefit) => <li>{benefit}</li>)} */}
							<li>Lorem Ipsum is simply dummy text of the printing an</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
						</ul>
						<div className="price">
							<h2>{price ?? "price"}</h2>
						</div>
						<CTA_button type={"primary"}>Buy Now</CTA_button>
					</div>
				</div>
			</div>
		</>
	);
}
