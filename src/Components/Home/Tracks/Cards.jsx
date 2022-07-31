import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/Cards.css";
// import TrackDetails from '../../../Data/TrackDetails';

export default function Cards({ image, name, info, link }) {
	const OpenInNewTab = () => {
		window.open(link, "_blank");
	};
	return (
		<div className="track_card">
			<div className="track_image">
				<img src={image} alt="Image" srcset="" />
			</div>

			<div className="track_content">
				<div className="track_head">{name}</div>
				<div className="track_info">{info}</div>
			</div>
			<div className="track_btn">
				<CTA_button type={"secondary"} onClick={() => OpenInNewTab()}>
					Read More
				</CTA_button>
			</div>
		</div>
	);
}
