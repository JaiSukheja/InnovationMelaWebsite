import React from 'react'
import './EventCard.css'

const EventCard = ({props}) => {
  return (
    <div class="box">
        <span></span>
        <div class="content">
            <h2>{props.EventName}</h2>
            <p>{props.EventDesc}</p>
            <a href="#">Read More</a>
        </div>
    </div>
  )
}

export default EventCard