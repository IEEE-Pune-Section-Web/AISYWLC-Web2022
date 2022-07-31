import React from "react";
import Container from "../../Layout/Container";
import "./Styles/Ticket.css";

import "./Styles/Ticket.css";

export default function TicketComing() {
  return (
    <>
      <Container className="Ticket Coming">
        <div className="Ticket_Header">
          <h1 className="Ticket_title">GRAB A TICKET</h1>
        </div>

        <div className="Coming_Content">
          <span className="Contenttext">Coming Soon...</span>
        </div>
      </Container>
    </>
  );
}
