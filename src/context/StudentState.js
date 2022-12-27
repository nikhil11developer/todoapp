import React, { useState } from 'react'
import StudentContext from './studentContext'
 
const StudentState = (props) => {
  const [student , setStudent]=useState({name:'amit' , age:21 , subject:'java' , marks:89})  
  const [employee , setEmployee]=useState({name:'jatin' , designation:'manager' , salary:20000})
  const hello=()=>{
    setTimeout(()=>{
      setStudent({name:'amitabh' , age:21 , subject:'java' , marks:89})
      setEmployee({name:'hrithik' , designation:'manager' , salary:20000})
    },2000)
  }
  return (
    <StudentContext.Provider  value={{student, employee , hello}}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentState