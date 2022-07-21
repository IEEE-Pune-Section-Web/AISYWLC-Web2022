import React from "react";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Venue from "../Components/Home/Venue";
import ComingSoon from "../Components/ComingSoon";
import Ticket from "../Components/Home/Ticket";
import Speakers from "../Components/Home/Speakers";

const Home = () => {
	return (
		<main>
			<Hero />
			<About />
			<Speakers/>
			<Venue />
			<ComingSoon />
			<Ticket />
			

		</main>
	);
};

export default Home;
