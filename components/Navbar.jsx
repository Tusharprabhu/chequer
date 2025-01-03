import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="links">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/issuedlist"><li>Issuedlist</li></NavLink>
            <NavLink to="/printcheque"><li>Printcheque</li></NavLink>
            <NavLink to="/report"><li>Report</li></NavLink>
            </div>
        </nav>
    </div>

  )
}

export default Navbar