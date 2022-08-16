import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/ExtraCTA.css";
const ExtraCTA = ({ title, link, buttoncontent }) => {
	const openLink = () => {
		window.open(link, "_blank");
	};
	return (
		<div className="ExtraCTA">
			<h5 className="ExtraCTA__title">{title} :</h5>
			<div className="ExtraCTA__button">
				<CTA_button onClick={openLink} type="ternary">
					{buttoncontent ?? "Register Now"}
				</CTA_button>
			</div>
		</div>
	);
};

export default ExtraCTA;
