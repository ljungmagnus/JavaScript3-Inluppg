import axios from 'axios'
import { useState, useCallback } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const AddEventForm = () => {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: ''
  })

  const [error, setError] = useState({
    title: null,
    date: null,
    time: null,
    desc: null
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  
  const url = 'http://localhost:8080/events'

  const addNewEvent = useCallback(async (event) => {
    const res = await axios.post(url, event)
    console.log(res.status, res.statusText)

  },[url])

  
  const validateForm = (formData) => {
    
    //nollställer 
    setError(state => ({ 
      ...state, 
      title: false,
      date: false,
      time: false,
      desc: false
    }))

    // Date Format YYYY-MM-dd using separator -
    const regExDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    //Time Format HH:MM 24-hour with leading 0
    const regExTime = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    //returnerar false om datum eller tid är ogiltig
    // console.log(regExDate.test(formData.date))
    // console.log(regExTime.test(formData.time))

    if(formData.title.trim() === '') {
      setError(state => ({ ...state, title: true }))
      return false
    }
    if(!regExDate.test(formData.date)) {
      setError(state => ({ ...state, date: true }))
      return false
    }
    if(!regExTime.test(formData.time)) {
      setError(state => ({ ...state, time: true }))
      return false
    }
    if(formData.description.trim() === '') {
      setError(state => ({ ...state, desc: true }))
      return false
    }
    
    //om inga fel hittas i formuläret
    return true

  }
    

  const handleSub = e => {
    e.preventDefault()

    const isValid = validateForm(formData)
    
    // om formuläret är ok skapa nytt event
    if(isValid) {
      
      //Merge ihop datum och tid och skapar ett date object
      const timeAndDate = moment(formData.date + ' ' + formData.time)
      console.log(timeAndDate)
      
      //Tar textsträngen som representerar ett datum och returnerar en siffra i antalet millisekunder från 1 Jan 1970.
      const timestamp = Date.parse(timeAndDate)
      console.log(timestamp)
      
      //Kontroll
      // const d = new Date(timestamp)
      // console.log(d.toString())
      const newEvent = {...formData, timestamp }
      addNewEvent(newEvent)
      navigate("/")
      
    }
    
  }
  
  return (
    <form onSubmit={handleSub} className='add-event-form container'>
      
      <div className='event-header'>
        <button type="button" className='dropbtn'></button>
        <h1>Add Event</h1>
        <button onClick={() => navigate(-1)} type="button" className='btn btn-sm'>x</button>
      </div>
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input value={formData.title} onChange={onChange} className='form-control' type="text" name='title' id='title'/>
        { error.title && <small className='error-message'>Titel kan inte vara tom</small> }
      </div>
      <div className='d-flex'>
        <div className="input-group">
          <label htmlFor="date">Date:</label>
          <input value={formData.date} onChange={onChange} className='form-control' type="date" name='date' id='date'  />
          { error.date && <small className='error-message'>Fältet är ofullständigt eller har ett ogiltigt datum</small> }
        </div>
        <div className="input-group">
          <label htmlFor="time">Time:</label>
          <input value={formData.time} onChange={onChange} className='form-control' type="time" name='time' id='time' />
          { error.time && <small className='error-message'>Fältet är ofullständigt eller har en ogiltigt tid</small> }
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="desc">Event description:</label>
        <textarea value={formData.description} onChange={onChange} className='form-control' name="description" id="desc" cols="30" rows="10"></textarea>
        { error.desc && <small className='error-message'>Beskrivingen kan inte vara tom</small> }
      </div>
      <div className='add-event'>
        <button className='btn btn-outline'>Add Event</button>
      </div>
           
    </form>
  )
}

export default AddEventForm