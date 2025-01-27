import React, { useState } from 'react'

function Task3() {
    const [msg, setMsg] = useState(true)
    function handleSubmit(e) {
       
       alert(msg ? "stop is next" : "walk is next");
       setMsg(!msg);


       
    }
    return (
        <div>
          
                <button onClick={handleSubmit}>change to {msg ? "walking" : "stop"} </button>
                <h1 style={{color:'red'}}>{msg ? "walk" :<span style={{color:'green'}}>{"stop"}</span>}</h1>
         
        </div>
    )
}

export default Task3
