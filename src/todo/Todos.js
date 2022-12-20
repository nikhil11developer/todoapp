import React, { useEffect, useState } from 'react'
import { Container, Table  , Button} from 'reactstrap'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const fetchTodos = async () => {
        const data = await fetch("http://localhost:5000/todos")
        const parsedData = await data.json()
        setTodos(parsedData)
    }
    useEffect(() => {
        fetchTodos()
    }, [])
    return (
        <Container>
            <Table hover>
                <thead>
                    
                    <th>ID</th>
                    <th>TASK</th>
                    <th>ISDONE</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>

                </thead>
                <tbody>
                {todos.map((todo) => {
                    return <tr>
                        <td>{todo.id}</td>
                        <td>{todo.task}</td>
                        <td>{todo.isDone.toString()}</td>
                        <td><Button color="success">Update</Button></td>
                        <td><Button color="danger">Delete</Button></td>
                    </tr>
                })}
                </tbody>
            </Table>

        </Container>
    )
}

export default Todos