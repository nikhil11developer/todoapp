
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Form , FormGroup , Label , Input , Button , Alert}  from 'reactstrap'
const Login = (props) => {
  const navigate=useNavigate()
  const [user , setUser]=useState({username:'' , password:''})
  const [success , setSuccess]=useState(true) 
  const clickHandler=(e)=>{
    e.preventDefault();
    if(user.username==='nikhil' && user.password==='123'){
        props.login(user.username) 
        setSuccess(true)
        navigate("/welcome" , {state:{name:user.username, message:'message from login component'}})
    }
    else{ 
           
        setSuccess(false)
        setTimeout(()=>{
          setSuccess(true) 
        } , 3000)
    } 
  }   

  const changeHandler=(e)=>{
    //setUser({ username:'nikhil' , password:'123' , username:ami})
    setUser({...user , [e.target.name]:e.target.value})
  }
  
  return (
    <div className='container mx-2 my-3  'style={{width:'50%' , justifyContent:'center'}} >
        <Form>
   
   {!success && <Alert color="danger">Login failure</Alert>}
   

    
  <FormGroup>
    <Label for="exampleUsername">
      Email
    </Label>
    <Input
      id="exampleUsername"
      name="username"
      placeholder="with a placeholder"
      type="text"
      value={user.username}
      onChange={changeHandler}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={user.password}
      onChange={changeHandler}
    />
  </FormGroup>
  <Button  color="danger"  onClick={(e)=>{clickHandler(e)}}>
    Submit
  </Button>
  </Form>
    </div>
  )
}

export default Login