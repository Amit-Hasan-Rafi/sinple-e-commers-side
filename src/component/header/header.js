import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='header' >
      <Link className='links' to='/shop'>Shop</Link>
      <Link className='links' to='/orderPage'>Orders</Link>
    </div>
  )
  
}

export default Header