import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  const SaveBook = async () => {





    const postoption = {

      'method': 'POST',

      'body': JSON.stringify({

        title: 'sss', auther: 'aa', genre: 'ddd'

      }),

      'header': { "Content-type": "application/json" }

    }

    const data = await fetch(`http://localhost:5000/books`, postoption)

    const response = await data.json()

    console.log(response)

  }
  return (
    <Button variant="primary" onClick={()=>SaveBook()}  >

        Submit

      </Button>
  );
}


