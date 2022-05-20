import React from 'react'
import { Link } from 'react-router-dom'


const Event = ({event}) => {
  
  return (
    <div className='event'>

      <div className="card">
        <div className='event-status'></div>
        <div className='event-info'>
          <Link to={`/event/${event.id}`} className='event-title'>
            <h3>{event.title}</h3>
          </Link> 
          <p>Due: {event.date} at {event.time}</p>
        </div>
      </div>
    
    </div>
  )
}

export default Event