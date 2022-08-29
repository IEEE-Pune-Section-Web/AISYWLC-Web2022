import React from "react";
import "./Styles/Container.css";
const Container = ({ className, style, children, id }) => {
	return (
		<section
			className={`container ${className}`}
			id={id ? id : className}
			style={style}
		>
			{children}
		</section>
	);
};

export default Container;
