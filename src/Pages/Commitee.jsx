import React from "react";
import Container from "../Layout/Container";
import CommiteeDetails from "../Data/Commitee";
import SingleCommitee from "../Components/Committee/SingleCommitee";

import "./Styles/Committees.css";

const Commitee = () => {
	return (
		<main className={"committees"}>
			<div className="committess__header">
				<h1>Committee</h1>
			</div>
			{CommiteeDetails &&
				CommiteeDetails.map((committee) => (
					<SingleCommitee committee={committee} />
				))}
		</main>
	);
};

export default Commitee;
