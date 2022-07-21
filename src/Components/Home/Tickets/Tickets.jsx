import React from "react";
import "../Tickets/Styles/Tickets.css";

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
}
