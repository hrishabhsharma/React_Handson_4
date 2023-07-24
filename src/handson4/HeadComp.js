import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const HeadComp = () => {
  return (
    <div className='header'>
        <Link to='/' className='tag'>Home</Link>
        <Link to='/students' className='tag'>Students</Link>
        <Link to='/contact-us' className='tag'>Contact Us</Link>
    </div>
  )
}

export default HeadComp