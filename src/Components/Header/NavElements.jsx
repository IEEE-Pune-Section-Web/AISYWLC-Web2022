import React from "react";
import { NavLink } from "react-router-dom";
import CTA_button from "../CTA_button";
import "./Styles/index.css";

const NavElements = () => {
	return (
		<>
			<ul className="nav__links">
				<li className="nav__link">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="nav__link">
					<NavLink to="About">About</NavLink>
				</li>
				<li className="nav__link">
					<NavLink to="Venue">Venue</NavLink>
				</li>
				<li className="nav__link">
					<NavLink to="Sponsor">Sponsor</NavLink>
				</li>
				<li className="nav__link">
					<NavLink to="Speaker">Speakers</NavLink>
				</li>
			</ul>
			<CTA_button type={"secondary"}>Buy Tickets</CTA_button>
		</>
	);
};

export default NavElements;
