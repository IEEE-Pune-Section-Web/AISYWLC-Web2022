import React from 'react';
import "./Styles/Cards.css";
// import TrackDetails from '../../../Data/TrackDetails';

export default function Cards(props) {
  return (
    <>
    <div className="track_card">
        <div className="track_image">
          <img src={props.image} alt="Image" srcset="" />
        </div>

        <div className="track_content">
            <div className="track_head">
                {props.name}
            </div>
            <div className="track_info">
                {props.info}
            </div>
        </div>
    </div>
    </>
  )
}
