import React from "react";
import { Link } from "react-router-dom";
import CTA_button from "../CTA_button";
import "./Styles/index.css";

const NavElements = () => {
	return (
		<>
			<ul className="nav__links">
				<li className="nav__link">
					<a href="/#hero">Home</a>
				</li>
				{/* <li className="nav__link">
					<Link to="About">About</Link>
				</li> */}
				{/* <li className="nav__link">
					<a href="Venue">Venue</a>
				</li> */}
				{/* <li className="nav__link">
					<a href="Sponsor">Sponsor</a>
				</li> */}
				<li className="nav__link">
					<a href="/#speakers">Speakers</a>
				</li>
			</ul>

			<a href="#Ticket">
				<CTA_button type={"secondary"}>Buy Tickets</CTA_button>
			</a>
		</>
	);
};

export default NavElements;
