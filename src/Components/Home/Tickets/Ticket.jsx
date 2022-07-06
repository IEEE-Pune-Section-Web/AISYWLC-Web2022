import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/Ticket.css";
const Ticket = ({ type, benefits, price }) => {
	return (
		<div className="ticket">
			<div className="ticket__type">
				<p>{type ?? "IEEE Student Members"}</p>
			</div>
			<div className="ticket__body">
				<div className="ticket__benefits">
					{benefits && (
						<ul>
							{benefits.map((benefit) => (
								<li className="benefit">{benefit}</li>
							))}
						</ul>
					)}
				</div>
				<div className="ticket__CTA">
					<CTA_button>Book NOW!</CTA_button>
				</div>
				<div className="ticket__price">{price ?? "Price"}</div>
			</div>
		</div>
	);
};

export default Ticket;
