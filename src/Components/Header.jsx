import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Navmenu from "./Header/Navmenu";
import "./Styles/Header.css";
const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<Link className="header__logo" to="/">
					<img src="./Assets/Logo.png" alt="AISYWLC Logo" srcset="" />
				</Link>

				<Navbar />
				<Navmenu />
			</div>
		</header>
	);
};

export default Header;
