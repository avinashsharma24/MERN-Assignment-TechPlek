import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <div className='nav'>

    <div className='cpanel'> <NavLink className = "active_class" to= "/" >ClientsPanel</NavLink> </div>
    <div className='client'> <NavLink  className = "active_classb" to= "/client" >Clients</NavLink> </div>

      </div>
      
    </>
  )
}

export default Navbar
