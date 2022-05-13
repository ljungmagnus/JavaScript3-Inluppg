import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEventForm from './components/AddEventForm';
import Navbar from './components/Navbar';
import EventDetails from './views/EventDetails';
import EventList from './views/EventList';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className='views'>
        <Routes>
          <Route path='/' element={ <EventList /> } />
          <Route path='/event/:id' element={ <EventDetails />} />
          <Route path='/create' element={ <AddEventForm /> } />
          <Route path='*' element={
            <div>
              <h2>404, path not found</h2>
            </div>  
          } />
        </Routes>
      </div>

    </div>
  );
}

export default App;
