import React from "react";
import "./Styles/CTA_button.css";
const CTA_button = ({ type, icon, onClick, children, isdisabled = false }) => {
	return (
		<button
			onClick={onClick}
			className={
				isdisabled
					? "cta  cta__disabled"
					: type
					? `cta cta__${type}`
					: "cta cta__primary"
			}
			disabled={isdisabled}
		>
			{icon && <div className="cta__icon">{icon}</div>}
			<div className="cta__content">{children}</div>
		</button>
	);
};

export default CTA_button;
