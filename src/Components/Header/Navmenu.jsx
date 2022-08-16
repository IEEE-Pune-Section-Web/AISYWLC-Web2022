import React, { useEffect } from "react";
import { useState } from "react";
import NavElements from "./NavElements";
import "./Styles/NavMenu.css";
const Navmenu = () => {
	const [istoggled, setToggle] = useState(false);
	const Toggle = () => {
		setToggle(!istoggled);
	};
	useEffect(() => {
		if (istoggled) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [istoggled]);

	return (
		<div className="navmenu">
			<div
				onClick={Toggle}
				className={istoggled ? "hamburger active" : "hamburger"}
			>
				<div className="hamBox">
					<div className="hamBox__inner"></div>
				</div>
			</div>
			<aside className={istoggled ? "menu__sidebar active" : "menu__sidebar"}>
				<nav>
					<NavElements />
				</nav>
			</aside>
		</div>
	);
};

export default Navmenu;
