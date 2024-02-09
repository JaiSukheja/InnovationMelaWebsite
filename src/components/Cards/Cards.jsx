import React from 'react'
import EventCard from '../EventCard/EventCard'
import './Cards.css'
import { EventData } from '../../Data/Event'

const Cards = () => {
  return (
    <div className='cards'>
        {EventData.map((event, index) => {
            return <EventCard key={index} props={event} />
        }
        )}
    </div>
  )
}

export default Cards