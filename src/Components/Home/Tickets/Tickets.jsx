import React from "react";
import CTA_button from "../../CTA_button";
import "./Styles/Tickets.css";

<<<<<<< HEAD
export default function Tickets() {
  return (
    <>
      <div className="tickets">
        
        <div className="ticket">
          <div className="left">
            <div className="ticket-left">
              <div className="circle"></div>
              <p className="admit-one">
                <span>IEEE Student Members</span>
              </p>
            </div>
            <div className="ticket-info">
              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
                <div className="price">
                  <h2>Price</h2>
                </div>
                <div className="button">
                  <button className="btn">
                    <a href="#">Book NOW!</a>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
=======
export default function Tickets({ type, benefits, price, link }) {
	return (
		<>
			<div className="ticket">
				<div className="left">
					<div className="ticket-left">
						<div className="circle"></div>
						<div className="admit-one">
							<span>{type ?? "IEEE Student Members"}</span>
						</div>
					</div>
					<div className="ticket-info">
						<ul>
							{/* {benefits & benefits.map((benefit) => <li>{benefit}</li>)} */}
							<li>Lorem Ipsum is simply dummy text of the printing an</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
							<li>Lorem Ipsum is simply dummy text of the printing and</li>
						</ul>
						<div className="price">
							<h2>{price ?? "price"}</h2>
						</div>
						<CTA_button type={"primary"}>Buy Now</CTA_button>
					</div>
				</div>
			</div>
		</>
	);
>>>>>>> 4194104826dd353b87685091d3a26cd9cb35ee64
}
