import React, { useState } from "react";
import CTA_button from "./CTA_button";
import "./Styles/ContactModal.css";
const ContactModal = ({ isOpen, setOpen }) => {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Msage, setMsage] = useState("");
	function clearFields() {
		setName("");
		setEmail("");
		setMsage("");
	}
	const scriptURL =
		"https://script.google.com/macros/s/AKfycbxUp17NJg56jrREQVYK634Cw8zTUfKD1FkLa4ATaTvOuxB57gKEpNxC8sca2YEJXPan/exec";

	const createFormJson = () => {
		const formData = {
			Name,
			Email,
			Message: Msage,
		};
		const data = JSON.stringify(formData);
		console.log(data);
		return data;
	};

	const sendRequest = (e) => {
		e.preventDefault();
		const form = document.forms["Contact"];

		e.preventDefault();
		fetch(scriptURL, {
			method: "POST",
			body: new FormData(form),
			referrerPolicy: "origin",
		})
			.then((response) => {
				console.log("Success!", response);
				clearFields();
				setOpen(false);
			})
			.catch((error) => {
				console.error("Error!", error.message);
				alert(
					"There was an error, please Try again or else connect with us with our email at the footer"
				);
			});
	};
	return (
		<div className={isOpen ? "modal__wrapper" : "modal__wrapper closed"}>
			<div className="modal__backdrop" onClick={() => setOpen(false)}></div>
			<form name="Contact" onSubmit={(e) => sendRequest(e)} className="modal">
				<div className="modal__details">
					<div className="modal__input">
						<input
							type="text"
							name="Name"
							required
							about="Give your name"
							value={Name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor="name">Name</label>
					</div>
					<div className="modal__input">
						<input
							type="email"
							name="Email"
							required
							about="Give your Email"
							value={Email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="Email">Email</label>
					</div>
				</div>
				<div className="modal__message">
					<textarea
						name="Message"
						id=""
						maxLength="250"
						value={Msage}
						onChange={(e) => setMsage(e.target.value)}
					></textarea>
				</div>
				<div className="modal__button">
					<CTA_button>Submit</CTA_button>
				</div>
			</form>
		</div>
	);
};

export default ContactModal;
