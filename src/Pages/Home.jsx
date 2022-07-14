import React from "react";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Venue from "../Components/Home/Venue";
import ComingSoon from "../Components/ComingSoon";
import Ticket from "../Components/Home/Ticket";


const Home = () => {
	return (
		<main>
			<Hero />
			<About />
			<Venue />
			<ComingSoon />
			<Ticket />
			
		</main>
	);
};

export default Home;
