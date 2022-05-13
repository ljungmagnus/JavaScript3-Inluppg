import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='nav-brand'>My events</Link>
      <ul className='nav-links'>
        <Link to='/create' className='nav-link'>+ Add new event</Link>
        <li className='nav-link'><i className="fa-solid fa-circle-user"></i></li>
      </ul>
    </nav>
  )
}

export default Navbar