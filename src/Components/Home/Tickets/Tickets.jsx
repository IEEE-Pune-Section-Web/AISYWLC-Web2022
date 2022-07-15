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
              <div className="admit-one">
                <span>IEEE Student Members</span>
              </div>
            </div>
            <div className="ticket-info">
              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing an</li>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
                <li>Lorem Ipsum is simply dummy text of the printing and</li>
              </ul>
              <div className="price">
                <h2>price</h2>
              </div>
              <div className="button">
                <button className="btn">
                  <a href="#">Book NOW!</a>
                </button>
              </div>
            </div>
          </div>
        </div>

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
                  <h2>price</h2>
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
