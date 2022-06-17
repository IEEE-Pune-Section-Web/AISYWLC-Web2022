import React from "react";
import "./Styles/Card.css";
const Card = ({ image, name, details, socials }) => {
	return (
		<div className="speaker__card">
			<div className="card__image">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="card__content">
				<div className="card__name">{name}</div>
				<div className="card__detail">{details}</div>
			</div>
			<div className="card__socials">
				{socials[0] &&
					socials.map((social) => <div className="card__social">og</div>)}
			</div>
		</div>
	);
};

export default Card;
