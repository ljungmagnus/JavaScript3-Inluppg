import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const EventDetails = () => {
  
  const { id } = useParams()
  
  const [event, setEvent] = useState([])
  const url = 'http://localhost:8080/events/'

  const getEventById = useCallback(async (id) => {
    const res = await axios.get(url + id)
    setEvent(res.data)
  },[url]) 

 useEffect(() => {
    getEventById(id)

 }, [getEventById, id])
  

  return (
    <div className='event-details container'>

      <div className='card'>
        
        <div className="showcase">
          <p>{event.id}</p>
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h1>{event.title}</h1>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="card-body">
            <p>{event.description}</p>
          </div>
          <div className='card-counter'>
            <p>Due: {event.date} at {event.time}</p>
          </div>
        </div>

      </div>   
    
    </div>
  )
}

export default EventDetails