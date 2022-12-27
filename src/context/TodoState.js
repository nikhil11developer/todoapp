import React, { useState } from 'react'

import TodoContext from './todoContext'



const TodoState = (props) => {
  
  const[todos , setTodos]=useState([])
  const fetchTodos = async () => {
    const data = await fetch("http://localhost:5000/todos")
    const parsedData = await data.json()
    setTodos(parsedData)
}  
const deleteTodo=async(id)=>{
  const data=await fetch(`http://localhost:5000/todos/${id}`, {method:'delete'})
  const response =await data.json();
  fetchTodos();  
}

const getTodoById=async(id)=>{
  const data=await fetch(`http://localhost:5000/todos/${id}`)
   const response =await data.json();
   console.log(response)
   return response
}

const updateTodo=async(todo)=>{
  const requestOptions={
      'method':'PUT',
      'body':JSON.stringify({
          task:todo.task, prerequisites:todo.prerequisites, isDone:todo.isDone
      }),
      'headers':{"Content-type":"application/json"}
      
  }
  const data=await fetch(`http://localhost:5000/todos/${todo.id}`, requestOptions)
  const response =await data.json();
  
}
  return (
    <TodoContext.Provider value={{todos , fetchTodos , deleteTodo , getTodoById , updateTodo}}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState