import React from 'react'
import { useState } from 'react'


function Button() {

  const [state, setState] = useState(': res')


  async function reqHandle() {
    const res = await fetch('http://localhost:2000', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'fetch query'
      })
    })
    const json = await res.json()
    setState(json.message)
  }

  return (
    <>
      <button onClick={reqHandle}>
        post request {state}
      </button>

    </>
    
    
  )
}

export default Button