import React from "react";
import Container from "../../Layout/Container";
import "./Styles/AboutUs.css";


export default function AboutUs() {
  return (
    <>
      <Container className="main">
        {/* <div className="AboutUs_Header">
          <h1 className="AboutUs_title">About Us</h1>
        </div> */}

        <div className="about_card">
          <div className="abt-card">
            <div className="image">
              <h1></h1>
            </div>
          </div>
          <div className="abt-card">
            <div className="content">
              <h3>
                IEEE India Council is the umbrella organization which
                coordinates IEEE activities in India. Its primary aim is to
                assist and coordinate the activities of local “Sections” to
                benefit mutually and avoid duplication of effort and resources.
                IEEE India Council was established on 20th May 1976 and is one
                of the five councils in the Asia Pacific Region (Region #10 of
                IEEE).
              </h3>
            </div>
          </div>
        </div>

        <div className="about_card">
          <div className="abt-card">
            <div className="content">
              <h3>
                IEEE Pune Section was established on June 26, 2010 with
                terrestrial boundaries confined to Pune metropolitan City(Postal
                Code 411001 to 411999) The section falls under the jurisdiction
                of Asia Pacific Region (R-10) of IEEE. Prior to that it was the
                subsection of IEEE Bombay section since June 20, 2003 till its
                formation. At present, the Pune section has more than 300
                professional members and over 1100 other members, including
                student members. There are 19 IEEE Student Branches in different
                Engineering Colleges in and around Pune City.<br></br>Visit:​
                <a href="ieeepunesection.org" target="blank">
                  {" "}
                  ieeepunesection.org
                </a>
              </h3>
            </div>
          </div>
          <div className="abt-card">
            <div className="image">
              <h1></h1>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
