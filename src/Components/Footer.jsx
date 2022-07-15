import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo.webp";
import "./Styles/Footer.css";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__upper">
				<div className="footer__branding">
					<div className="branding__logo">
						<img src={logo ?? ""} alt="AISYWLC2022" />
					</div>
					<p className="branding__pitch">
						The flagship event of IEEE India Council, IEEE AISYWLC, has always
						been a colloquium that brings together the youth with professionals
						and experts with their ideologies tallying up to be the best
						exchange of wisdom and insight.
					</p>
				</div>
				<nav className="footer__nav">
					{/* <ul className="footer__links">
						<NavLink to="Home">
							<li>Home</li>
						</NavLink>
						<NavLink to={"About"}>
							<li>About</li>
						</NavLink>
						<NavLink to={"Speaker"}>
							<li>Speaker</li>
						</NavLink>
						<NavLink to={"Tracks"}>
							<li>Tracks</li>
						</NavLink>
						<NavLink to={"Schedule"}>
							<li>Schedule</li>
						</NavLink>
					</ul> */}
				</nav>
				<div className="footer__social">
					<div className="social__media">
						{/* <h4>Follow us on</h4>
							<ul className="social__links"></ul> */}
					</div>
					<div className="social__contactus">
						<h4>Contact Us</h4>
						<p>Email us: eventsaisywlc1@gmail.com</p>
						{/* <p>Call us</p>
						<p>Name</p>
						<p>Name</p> */}
					</div>
				</div>
			</div>
			<div className="footer__lower">
				<p>© AISYWLC'22 Team. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
