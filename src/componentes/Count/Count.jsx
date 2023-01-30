import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    const hanldeCount = () =>{
        setCount (count+1)
    }

  return (
    <>
     { count }
    
    </>

    
  )
}

export default Count

