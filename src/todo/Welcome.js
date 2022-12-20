import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from 'reactstrap';


const Welcome = () => {
  const location=useLocation();  
  const [message , setMessage]=useState("")
  const clickHandler=async()=>{
    const data=await fetch("http://localhost:5000/messages")
    const parsedData= await data.json()
    
    var randNum =  Math.floor(Math.random() * 4) + 1;
    setMessage(parsedData[randNum].message)
  }
  return (

    <Container>
        <h3>Hello {location.state.name} welcome your login is successful go to all hello todos <Link to="/todos">Click Here</Link></h3>
        <p style={{color:'red'}}>{message}</p>
        <button onClick={clickHandler}>Click Here to get the message</button>
    </Container>
  )
}

export default Welcome