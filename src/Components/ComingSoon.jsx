import React from "react";
import Container from "../Layout/Container";
import "./Styles/ComingSoon.css";
const ComingSoon = ({ extraPitch }) => {
	return (
		<Container className={"comingSoon"}>
			<h1 className="comingSoon__title title">Coming Soon</h1>
			{extraPitch && <p className="comingSoon__pitch">{extraPitch}</p>}
		</Container>
	);
};

export default ComingSoon;
