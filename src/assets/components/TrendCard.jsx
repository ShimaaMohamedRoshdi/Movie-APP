import React from 'react'
import './trendCard.css'
const TrendCard = ({slide}) => {
  return (
    <div className='trend-card'>
        <img className='img-fluid' src={slide.previewImg} alt="" />
        <a href="#">
            Add to calender
            <ion-icon name="calender-outline"></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard