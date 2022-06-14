import React from "react";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Venue from "../Components/Home/Venue";
import ComingSoon from "../Components/ComingSoon";

const Home = () => {
	return (
		<main>
			<Hero />
			<About />
			<Venue />
			<ComingSoon />
		</main>
	);
};

export default Home;
