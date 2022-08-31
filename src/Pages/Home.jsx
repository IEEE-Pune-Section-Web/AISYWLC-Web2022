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
// import Detail from "../Components/Home/Detail/Detail";
import Info from "../Components/Home/Details/Info";
import Sponsors from "../Components/Home/Sponsors";
import Schedule from "../Components/Home/Schedule";
import FAQ from "../Components/Home/FAQ";

const Home = () => {
	const [isModal, setModal] = useState(false);
	return (
		<main>
			<Hero />
			<About />
			{/* <Detail/> */}
			<Info/>
			<Track />
			<Speakers />
			<Venue />
			<Ticket />
			<Schedule />
			<Sponsors />
// 			<FAQ />
			<Contact isModal={isModal} setModal={setModal} />
			<ContactModal isOpen={isModal} setOpen={setModal} />
		</main>
	);
};

export default Home;
