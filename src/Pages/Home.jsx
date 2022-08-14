import React, { useState } from "react";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Venue from "../Components/Home/Venue";
import ComingSoon from "../Components/ComingSoon";
import Ticket from "../Components/Home/Ticket";
import Speakers from "../Components/Home/Speakers";
import Contact from "../Components/Home/Contact";
import ContactModal from "../Components/ContactModal";
import Track from "../Components/Home/Track";
import TicketComing from "../Components/Home/TicketComing";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
	const [isModal, setModal] = useState(false);
	return (
		<main>
			<Hero />
			<About />
			<Track />
			<Speakers />
			<AboutUs />
			<Venue />
			{/*<ComingSoon /> */}
			{/*<Ticket/>*/}
			<TicketComing/>
			<Contact isModal={isModal} setModal={setModal} />
			<ContactModal isOpen={isModal} setOpen={setModal} />
		</main>
	);
};

export default Home;
