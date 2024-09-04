import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CoursesList from './CoursesList'


function Course() {
  return (
    <>
     <Navbar/>
     <div className='min-h-screen'>
        <CoursesList/>
     </div>
    
     <Footer/> 
    </>
  )
}

export default Course
