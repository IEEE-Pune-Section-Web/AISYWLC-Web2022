import React from "react";
import "./Styles/Container.css";
const Container = ({ className, style, children }) => {
	return (
		<section className={`container ${className}`} id={className} style={style}>
			{children}
		</section>
	);
};

export default Container;
