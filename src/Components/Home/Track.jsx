import React from "react";
import Container from "../../Layout/Container";
import "./Styles/Track.css";
import Cards from "./Tracks/Cards";
import TrackDetails from "../../Data/TrackDetails";

export default function Track() {
	return (
		<Container className="track">
			<div className="track_title">
				<h1 className="title">AISYWLC'22 Tracks</h1>
			</div>

			<div className="track_cards">
				{TrackDetails &&
					TrackDetails.map((track) => (
						<Cards
							image={track.image}
							name={track.name}
							info={track.info}
							link={track.link}
						/>
					))}
			</div>
		</Container>
	);
}
