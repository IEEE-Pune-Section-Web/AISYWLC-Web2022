import React, { useState } from "react";
import CTA_button from "./CTA_button";
import "./Styles/ContactModal.css";
const ContactModal = ({ isOpen, setOpen }) => {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Msage, setMsage] = useState("");
	return (
		<div
			className={isOpen ? "modal__wrapper" : "modal__wrapper closed"}
			onClick={() => setOpen(false)}
		>
			<div className="modal">
				<div className="modal__details">
					<div className="modal__input">
						<input
							type="text"
							name="name"
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
				<CTA_button>Submit</CTA_button>
			</div>
		</div>
	);
};

export default ContactModal;
