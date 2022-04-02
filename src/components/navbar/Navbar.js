import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  const navigate = useNavigate()
  return (
    <div
      className='navBar'
    >
      <div
        onClick={() => navigate('/')}
      >Home</div>
      <div>About</div>
    </div>
  )
}

export default Navbar