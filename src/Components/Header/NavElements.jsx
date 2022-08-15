import React from "react";
import { NavLink } from "react-router-dom";
import CTA_button from "../CTA_button";
import "./Styles/index.css";

const NavElements = () => {
	return (
		<>
			<ul className="nav__links">
				<li className="nav__link">
					<a href="#hero">Home</a>
				</li>
				{/* <li className="nav__link">
					<a href="About">About</a>
				</li> */}
				{/* <li className="nav__link">
					<a href="Venue">Venue</a>
				</li> */}
				{/* <li className="nav__link">
					<a href="Sponsor">Sponsor</a>
				</li> */}
				<li className="nav__link">
					<a href="#speakers">Speakers</a>
				</li>
			</ul>
			<CTA_button type={"secondary"}>Register Now!</CTA_button>
		</>
	);
};

export default NavElements;
