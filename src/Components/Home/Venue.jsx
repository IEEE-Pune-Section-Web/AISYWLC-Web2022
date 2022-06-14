import React from "react";
import Location from "./Venue/Location";
import "./Styles/Venue.css";
import coep from "../../../Assets/COEP.jpeg";

const Venue = () => {
	return (
		<section className={"venue"}>
			<div className="venue__header">
				<h1 className="title">Venue</h1>
			</div>
			<div className="venue__contents">
				<Location
					name={"COLLEGE OF ENGINEERING PUNE"}
					pitch="College of Engineering Pune popularly known as CoEP is situated in the heart of the city. CoEP is a prestigious engineering college in Pune. CoEP, founded in 1854, is a nationally recognized leader in technical education. The institute is distinguished by its commitment to using advanced technology to solve today's major problems. The institute has a long history of striving for excellence. With a firm foundation in truth and humanity, the institute provides you with an understanding of both technical developments and the ethics that accompany them. The institute is consistently ranked among the top 20 technical colleges in India."
					key="COEP"
					bg={coep}
					link={"https://goo.gl/maps/LQzzaLtvjHbw8KuXA"}
				/>
			</div>
		</section>
	);
};

export default Venue;
