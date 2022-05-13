import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const EventDetails = () => {
  
  const { id } = useParams()
  
  const [event, setEvent] = useState([])
  const url = 'http://localhost:8080/events/'+id

  const getEventById = useCallback(async (id) => {
    const res = await axios.get(url)
    setEvent(res.data)
  },[url]) 

 useEffect(() => {
    getEventById(id)

 }, [getEventById, id])
  

  return (
    <div>
         
      ID: {event.id}
      <br />
      TITLE: {event.title}
      <br />
      DESCRIPTION: {event.description}
      <br />
      DATE: {event.date}
      <br />
      TIME: {event.time}
      
    
    </div>
  )
}

export default EventDetails