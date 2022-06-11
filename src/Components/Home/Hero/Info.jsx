import React from 'react'
import './Styles/Info.css'
const Info = ({icon, text}) => {
  return (
    <div className="info">
        <div className="info__icon">
            {icon ?? "ICON" }
        </div>
        <div className="info__text">
            {text ?? "This is sample text"}
        </div>
    </div>
  )
}

export default Info