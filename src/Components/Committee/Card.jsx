import React from "react";
import "./Styles/Card.css";
import { TiSocialLinkedin } from "react-icons/ti";

const Card = ({ image, name, title, socials }) => {
	const openLink = () => {
		window.open(socials, "_blank");
	};
	return (
		<div className="committee__card">
			<div className="card__image">
				<img src={image} alt={name} />
			</div>
			<div className="card__content">
				<div className="card__name">{name}</div>
				<div className="card__detail">{title}</div>
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
