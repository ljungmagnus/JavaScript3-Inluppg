import { useState, useEffect, useCallback } from 'react'
import Event from '../components/Event'
import axios from 'axios'

const EventList = () => {
  
  const [events, setEvents] = useState([])
  // const [url, setUrl] = useState('http://localhost:8080/events')
  const url = 'http://localhost:8080/events'
  const cmd = 'json-server db.json -m ./node_modules/json-server-auth --port 8080'
  
  const getEvents = useCallback(async () => {
    try {
      const res = await axios.get(url)
      // console.log(res.status)
      if(res.status === 200) {
        setEvents(res.data)
      }
    } 
    catch(error) {
      throw new Error('Was not able to get the data from the local json-server at ' + url + ' Please open up the terminal and try to Start JSON server with the following command: ' + cmd) 
    }
  }, [url])    

  useEffect(() => {
    getEvents()  
    
  }, [getEvents])
 

  return (
    <div>
      {
        events.map(event => (
          <Event key={event.id} event={event} />
        ))  
      }
      

    </div>
  )
}

export default EventList