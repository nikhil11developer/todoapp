import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

const StudentDemo = () => {
    function reducer(students, action) {
        switch (action.type) {
            case 'namecaps':
                return students.map((student) => { return { ...student, name: student.name.toUpperCase() } })
            case 'namesmall':
                return students.map((student) => { return { ...student, name: student.name.toLowerCase() } })
            case 'incrage':
                return students.map((student) => { return { ...student, age: student.age + 1 } })
            case 'agegt25':
                return students.filter((student)=>student.age>25)
            default:
                return students
        }

    }
    const [students, dispatch] = useReducer(reducer, [
        { name: 'amit', age: 21 },
        { name: 'neha', age: 20 },
        { name: 'jatin', age: 19 },
        { name: 'vishal', age: 22 },
        { name: 'vaibhav', age: 31 }
    ])
    const changeNameToUppercase = () => {
        dispatch({ type: 'namecaps' })
    }
    const changeNameToLowercase = () => {
        dispatch({ type: 'namesmall' })
    }
    const incrementAge = () => {
        dispatch({ type: 'incrage' })
    }
    return (
        <div>
            {students.map((student) => {
                return <p>{student.name} is {student.age} years old</p>
            })}
            <Button onClick={changeNameToUppercase}>name in caps</Button>
            <Button onClick={changeNameToLowercase}>name in small</Button>
            <Button onClick={incrementAge}>increment age by 1</Button>
            <Button onClick={()=>dispatch({type:'agegt25'})}>getage more than 25</Button>
        </div>
    )
}

export default StudentDemo