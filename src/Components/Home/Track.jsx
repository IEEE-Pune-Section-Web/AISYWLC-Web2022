import React from "react";
import Container from "../../Layout/Container";
import "./Styles/Track.css"
import Cards from "./Tracks/Cards";
import TrackDetails from "../../Data/TrackDetails";

export default function Track() {
  return (
    <>
      <Container className="track">
        <div className="track_title">
          <h1 className="title">AISYWLC'22 Tracks</h1>
        </div>

        <div className="track_cards">

          <Cards
           image={TrackDetails[0].image}
           name={TrackDetails[0].name}
           info={TrackDetails[0].info}/>
          <Cards
           image={TrackDetails[1].image}
           name={TrackDetails[1].name}
           info={TrackDetails[1].info}/>
          <Cards
           image={TrackDetails[2].image}
           name={TrackDetails[2].name}
           info={TrackDetails[2].info}/>
          <Cards
           image={TrackDetails[3].image}
           name={TrackDetails[3].name}
           info={TrackDetails[3].info}/>
          

        </div>
      </Container>
    </>
  );
}
