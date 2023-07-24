import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'

const LinkageComp = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Student/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    </>
  )
}

export default LinkageComp