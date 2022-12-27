import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container , Table , Button } from 'reactstrap'
import todoContext from '../../context/todoContext'



const NewTodos = () => {
  const navigate=useNavigate()  
  const TodoContext=useContext(todoContext) 
  const updateHandler=async(id)=>{
    const todo=await TodoContext.getTodoById(id)
    console.log(todo)
    navigate("/updatetodo" , {state:{todo:todo}})

  }
  useEffect(()=>{
    TodoContext.fetchTodos()
  },[])
  return (
    <Container>
            <Table hover>
                <thead>
                    
                    <th>ID</th>
                    <th>TASK</th>
                    <th>PREREQUISITES</th>
                    <th>ISDONE</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>

                </thead>
                <tbody>
                {TodoContext.todos.map((todo) => {
                    return <tr>
                        <td>{todo.id}</td>
                        <td>{todo.task}</td>
                        <td>{todo.prerequisites}</td>
                        <td>{todo.isDone.toString()}</td>
                        <td><Button color="success"  onClick={()=>updateHandler(todo.id)} >Update</Button></td>
                        <td><Button color="danger"  onClick={()=>TodoContext.deleteTodo(todo.id)} >Delete</Button></td>
                    </tr>
                })}
                </tbody>
            </Table>

        </Container>
  )
}

export default NewTodos