import React from "react";
import "./Styles/CTA_button.css";
const CTA_button = ({ type, icon, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className={type ? `cta cta__${type}` : "cta cta__primary"}
		>
			{icon && <div className="cta__icon">{icon}</div>}
			<div className="cta__content">{children}</div>
		</button>
	);
};

export default CTA_button;
