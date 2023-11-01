import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
       <NavLink to={'/'}>Home</NavLink> | 
       <NavLink to={'/dashboard'}> Dashboard</NavLink>
    </>
  )
}

export default NavBar