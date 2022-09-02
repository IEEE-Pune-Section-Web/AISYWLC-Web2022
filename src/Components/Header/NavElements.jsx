import React from "react";
import { Link } from "react-router-dom";
import CTA_button from "../CTA_button";
import "./Styles/index.css";

const NavElements = () => {
	const openLink = () => {
		window.open("https://www.townscript.com/e/aisywlc22-340012", "_blank");
	};
	return (
		<>
			<ul className="nav__links">
				<li className="nav__link">
					<a href="/#hero">Home</a>
				</li>
				{/* <li className="nav__link">
					<Link to="About">About</Link>
				</li> */}
				<li className="nav__link">
					<a href="/#Venue">Venue</a>
				</li>
				<li className="nav__link">
					<a href="/#speakers">Speakers</a>
				</li>
				<li className="nav__link">
					<a href="/#schedule">Schedule</a>
				</li>
				<li className="nav__link">
					<a href="/#FAQ">FAQ</a>
				</li>
				<li className="nav__link">
					<Link to="Committee">Committee </Link>
				</li>
			</ul>

			<CTA_button onClick={openLink} type={"secondary"}>
				Register Now
			</CTA_button>
		</>
	);
};

export default NavElements;
