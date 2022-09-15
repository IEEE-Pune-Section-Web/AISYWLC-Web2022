import React from "react";
import CTA_button from "../CTA_button";
import "./Styles/Contact.css";
const Contact = ({ isModal, setModal }) => {
	const changeModal = () => {
		isModal ? setModal(false) : setModal(true);
	};
	return (
		<section className="contact">
			<h3 className="contact__title">Have a Question?</h3>{" "}
			<CTA_button onClick={changeModal}>Get in Touch</CTA_button>
		</section>
	);
};

export default Contact;
