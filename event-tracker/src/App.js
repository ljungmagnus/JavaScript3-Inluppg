import './App.css';
import AddEventForm from './components/AddEventForm';
import Event from './components/Event';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Event />
      <AddEventForm />
    </div>
  );
}

export default App;
