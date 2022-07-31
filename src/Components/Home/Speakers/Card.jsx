import React from "react";
import "./Styles/Card.css";
import { TiSocialLinkedin } from "react-icons/ti";
const Card = ({ image, name, details, socials }) => {

	const openLink = () =>{
		window.open(socials, '_blank');
	}
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
				{socials && (
					<div className="social" onClick={openLink}>
						<TiSocialLinkedin />
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
