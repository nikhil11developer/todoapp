import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Form, Input, Label, FormGroup, Button } from 'reactstrap'
import todoContext from '../context/todoContext'


const UpdateTodo = () => {
    const TodoContext=useContext(todoContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [todo, setTodo] = useState({})
    useEffect(() => {

        setTodo(location.state.todo)
    }, [])
    const onChangeHandler = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }


    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="task">
                        Task
                    </Label>
                    <Input
                        id="task"
                        name="task"
                        placeholder="with a placeholder"
                        type="text"
                        value={todo.task}
                        onChange={onChangeHandler}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="prerequisites">
                        Prerequisites
                    </Label>
                    <Input
                        id="prerequisites"
                        name="prerequisites"
                        placeholder="with a placeholder"
                        type="text"
                        value={todo.prerequisites}
                        onChange={onChangeHandler}
                    />
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                        is completed
                    </Label>
                </FormGroup>
                <Button color="success" onClick={()=>TodoContext.updateTodo(todo)}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default UpdateTodo