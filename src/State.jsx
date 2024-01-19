import React, { useState } from 'react'
import "./btn.css"
const State = () => {
    const [colour,setCount]=useState(false)
   
  
  return (

    <div  className={colour?'abb':"white"}    > 

      
   
         
        <button className='btn'  onClick={()=>setCount(!colour)}>Switch Theme</button>
     
    </div>
  )
}

export default State