import React, { useContext } from 'react'
import studentContext from '../context/studentContext'

const About = () => {
  const a=useContext(studentContext)
  return (
    <div>Hello this is the about component and the subject is {a.subject}</div>
  )
}

export default About