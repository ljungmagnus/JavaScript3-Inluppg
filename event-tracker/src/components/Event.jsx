import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({event}) => {
  return (
    <div className='event'>

      <div className="card">
        <div className='event-status'></div>
        <div className='event-info'>
          <Link to={`/event/${event.id}`}>
            <h3>{event.title}</h3>
          </Link> 
          <p>Date:{event.date}, Time:{event.time}</p>
        </div>
      </div>
    
    </div>
  )
}

export default Event