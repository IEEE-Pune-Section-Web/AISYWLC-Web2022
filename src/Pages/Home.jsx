import React from "react";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Venue from "../Components/Home/Venue";
import ComingSoon from "../Components/ComingSoon";
import Tickets from "../Components/Home/Tickets";

const Home = () => {
	return (
		<main>
			<Hero />
			<About />
			<Venue />
			<ComingSoon />
			<Tickets />
		</main>
	);
};

export default Home;
