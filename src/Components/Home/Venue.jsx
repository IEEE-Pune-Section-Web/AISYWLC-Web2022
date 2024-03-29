import React from "react";
import Location from "./Venue/Location";
import "./Styles/Venue.css";
import content from "../../Data/content";

const Venue = () => {
	return (
		<section className={"venue"} id="Venue">
			<div className="venue__header">
				<h1 className="title">Venue</h1>
			</div>
			<div className="venue__contents">
				{content.venue.map(({ name, pitch, key, bg, link, pdflink }) => (
					<Location
						name={name}
						pitch={pitch}
						key={key}
						bg={bg.coep}
						link={link}
						pdflink={pdflink}
					/>
				))}
			</div>
		</section>
	);
};

export default Venue;
