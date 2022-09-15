import React from "react";
import Card from "./Card";
import "./Styles/Commitee.css";
const Track = ({ track }) => {
	return (
		<div className="track">
			<h4 className="track__title"> {track.name}</h4>
			<div className="track__members">
				<Members members={track.members} />
			</div>
		</div>
	);
};

const Members = ({ members }) =>
	members.map((member) => (
		<Card
			image={
				member.img
			}
			name={member.name}
			title={member.title} 
		/>
	));

const SingleCommitee = ({ committee }) => {
	const loadTracks = (tracks) => (
		<div className="tracks">
			{tracks.map((track) => (
				<Track key={tracks.name} track={track} />
			))}
		</div>
	);

	const LoadMembers = (members) => (
		<Members key={committee.name} members={members} />
	);

	return (
		<section className={`committe ${committee.name}`} id={committee.name}>
			<h2 className="committee__name"> {committee.name} </h2>
			{committee.tracks ? (
				loadTracks(committee.tracks)
			) : (
				<div className="committee__members">
					{LoadMembers(committee.members)}
				</div>
			)}
		</section>
	);
};

export default SingleCommitee;
