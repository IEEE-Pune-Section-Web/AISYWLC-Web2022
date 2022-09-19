import React from "react";
import { mapIll } from "../../../Data/Illustration";
import CTA_button from "../../CTA_button";
import "./Styles/Location.css";
const Location = ({ name, pitch, link, pdflink, bg }) => {
	const openMaps = () => {
		window.open(link, "_blank");
	};
	const openDocs = () => {
		window.open(pdflink, "_blank");
	};
	return (
		<div
			className="venue__location"
			style={bg && { backgroundImage: `url(.${bg}` }}
		>
			<div className="location__content">
				<h1 className="location__name">{name ?? "PINE"}</h1>

				<p className="location__pitch">
					{pitch ??
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, veritatis non velit modi architecto asperiores eligendi quos sapiente in, voluptates, dignissimos laborum cum doloribus impedit ducimus at! Alias, aut numquam!"}
				</p>
				<div className="location-links">
				<CTA_button onClick={openMaps} icon={mapIll}>
					Get On Maps
				</CTA_button>
				<CTA_button onClick={openDocs} icon={mapIll}>
					Travel Plans
				</CTA_button>
				</div>
			</div>
		</div>
	);
};

export default Location;
