import React from 'react';
import Container from "../../Layout/Container";
import "./Styles/About.css";


export default function About() {
  return (
    <>
    <Container className="About">
        <div className="About_content">
            <div className="About_text">
                <h1 className="small_title">What we are about<br/><span className="bold_text">Transforming India for<br/>a Better Tomorrow</span></h1>
                <div className="About_text_content"><br/>AISYWLC is the annual flagship event of IEEE India Council which administers a platform to young professionals, academicians, scholars, entrepreneurs and technocrats from divergent fields and careers to show up together and share a common podium.<br/><br/><br/> <span className="About_Theme">*About Theme*</span>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</div>
            </div>


            <div className="About_video"></div>

            
        </div>
    </Container>
    </>
  )
}
