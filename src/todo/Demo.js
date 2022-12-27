import React from 'react'
import {Button} from 'reactstrap'

const Demo = () => {
  const SaveBook=async()=>{

   

   

    const postoption={

      'method':'POST',

      'body':JSON.stringify({

        id:3   ,title:'sss',auther:'aa',genre:'ddd'

      }),

      'headers':{"Content-type":"application/json"}

    }

    const data= await fetch(`http://localhost:5000/books`,postoption)

    const response =await data.json()

    console.log(response)

  }
  return (
    <Button variant="primary" onClick={()=>SaveBook()}  >

    Submit

  </Button>
  )
}

export default Demo