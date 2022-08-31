import React from "react";
import Faq from "react-faq-component";
import "./Styles/FAQ.css";

const url = "http://aisywlc.in";

const data = {
    rows: [
        {
            title: <h3>What is AISYWLC'22?</h3>,
            content: <div><p>AISYWLC is the annual flagship event of IEEE India Council which administers a platform to young professionals, academicians, scholars, entrepreneurs and technocrats from divergent fields and careers to show up together and share a common podium.</p>
                        <p>With its theme “Transforming India for a Better Tomorrow”, AISYWLC'22 aims to kindle a spark in the minds of the attendees with it's diverse and inclusive talks, expert sessions and panel discussions by notable speakers from all walks of life. 
                The Congress not only focuses on highlighting the achievements and accolades of the nation but also primarily aims at bringing about the much needed welcome change in various fields. The Congress is an amalgamation of people all across India coming together and celebrating the beautiful blend of their cultures and vibrant ideas.</p></div>,
        },
        {
            title: <h3>Where will AISYWLC'22 be held?</h3>,
            content: <p>This year AISYWLC'22 will be conducted in Pune, Maharashtra in an offline mode only.</p>,
                
        },
        {
            title: <h3>What is the congress theme?</h3>,
            content: <p>AISYWLC'22 theme is: "Transforming India for a Better Tomorrow"</p>,
        },
        {
            title: <h3>Where can I find out what is happening at the congress?</h3>,
            content: <p>See the Schedule section on the AISYWLC'22 website "http://aisywlc.in". A schedule of events will also be shared with you.</p>,
        },
        {
            title: <h3>Which event can I attend?</h3>,
            content: <p>Anyone who has registered for AISYWLC'22 and has paid the Congress fee may attend all the events listed in schedule.</p>,
        },
        {
            title: <h3>Is this event open to only women?</h3>,
            content: <p>No. This event is open to all, irrespective of Gender or Age. Everyone is welcome to attend.</p>,
        },
    ],
};



export default function App() {

    return (
        <section className="FAQ">
            <h1 className="title">FAQs</h1>
                <div className="faq-toggle">
                    <Faq
                        data={data}
                    />
            </div>
        </section>
    );
}
