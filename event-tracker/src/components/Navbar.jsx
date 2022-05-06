import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='nav-brand'>My events</h1>
      <ul className='nav-links'>
        <li className='nav-link'>+ Add new event</li>
        <li className='nav-link'><i className="fa-solid fa-circle-user"></i></li>
      </ul>
    </nav>
  )
}

export default Navbar