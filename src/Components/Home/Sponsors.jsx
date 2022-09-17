import React from 'react'
import './Styles/Sponsors.css'
export default function Sponsors() {
  return (
    <>
    <section className="Sponsor-Section">
        <h1 className="title" id="sponsor">Sponsors</h1>
        <div className="sponsors_logo">
          <h2 className="sponsor_subtitle">Track Sponsors</h2>
          <div className="Track-Sponsors">
            <img src="../../../Assets/IEEE R10.webp" alt="R10" className="Sponsor-img" />
            <img src="../../../Assets/R10 SAC.webp" alt="R10-Student" className="Sponsor-img" />
            <img src="../../../Assets/R10 WIE.webp" alt="R10-WIE" className="Sponsor-img" />
            <img src="../../../Assets/R10 YP.webp" alt="R10-YP" className="Sponsor-img" />
            <img src="../../../Assets/SAC.webp" alt="Student" className="Sponsor-img" />
            <img src="../../../Assets/WIE.webp" alt="WIE" className="Sponsor-img" />
            <img src="../../../Assets/YP.webp" alt="YP" className="Sponsor-img" />
          </div>
        </div>

        <div className="sponsors_logo">
          <h2 className="sponsor_subtitle">Knowlegde Partner</h2>
          <div className="partners">
            <img src="../../../Assets/NCRA.png" alt="ncra" className="Knowledge-Partner" />
          </div>
        </div>

        <div className="sponsors_logo">
          <h2 className="sponsor_subtitle">Section Sponsors</h2>
          <div className="Section-Sponsors">
            <img src="../../../Assets/IEEE Hydrabad.png" alt="IEEE Hydrabad" className="Sponsor-img" />
            <img src="../../../Assets/IEEE Kerala.png" alt="IEEE Kerala" className="Sponsor-img" />
            <img src="../../../Assets/IEEE Madras.png" alt="IEEE Madras" className="Sponsor-img" />
            <img src="../../../Assets/IEEE UP.png" alt="IEEE UP" className="Sponsor-img" />
          </div>
        </div>

        <div className="sponsors_logo">
          <h2 className="sponsor_subtitle">Coding Partner</h2>
          <div className="partners">
            <img src="../../../Assets/GFG.png" alt="GeeksforGeeks" className="Sponsor-img" />
          </div>
        </div>
    </section>
    </>
  )
}
