import React from "react";
import Container from "../Layout/Container";
import CommiteeDetails from "../Data/Commitee";
import SingleCommitee from "../Components/Committee/SingleCommitee";
const Commitee = () => {
	return (
		<main className={"commitee"}>
			{CommiteeDetails &&
				CommiteeDetails.map((committee) => (
					<SingleCommitee committee={committee} />
				))}
		</main>
	);
};

export default Commitee;
