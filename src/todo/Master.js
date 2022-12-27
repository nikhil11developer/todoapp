import React, { useContext, useEffect, useState } from 'react'
import studentContext from '../context/studentContext'


const Master = () => {
  const a=useContext(studentContext)  
  useEffect(()=>{
       a.hello()
  },[])
  return (
    <div>
        the name of the student is {a.student.name}
        the name of the employee is {a.employee.name}
        
    </div>
  )
}

export default Master