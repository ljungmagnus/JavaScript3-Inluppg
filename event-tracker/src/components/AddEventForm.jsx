import { useState } from 'react'

const AddEventForm = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    desc: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  
  const handleSub = e => {
    e.preventDefault()
   
    console.log(formData)


  }
  
  return (
    <form onSubmit={handleSub} className='add-event-form container'>
      
      <div className='event-header'>
        <button className='dropbtn'></button>
        <h1>Add Event</h1>
        <button className='btn btn-sm'>x</button>
      </div>
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input value={formData.title} onChange={onChange} className='form-control' type="text" name='title' id='title'/>
      </div>
      <div className='d-flex'>
        <div className="input-group w50">
          <label htmlFor="date">Date:</label>
          <input value={formData.date} onChange={onChange} className='form-control' type="date" name='date' id='date'  />
        </div>
        <div className="input-group w50">
          <label htmlFor="time">Time:</label>
          <input value={formData.time} onChange={onChange} className='form-control' type="time" name='time' id='time' />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="desc">Event description:</label>
        <textarea value={formData.desc} onChange={onChange} className='form-control' name="desc" id="desc" cols="30" rows="10"></textarea>
      </div>
      <div className='add-event'>
        <button className='btn btn-outline'>Add Event</button>
      </div>
           
    </form>
  )
}

export default AddEventForm