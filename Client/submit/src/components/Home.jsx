import React, { useState } from 'react'

const Home = () => {
    const [msg, setMsg]=useState("");
    const [sent, setSent]=useState(false);


    if (sent) {
        return <><h1>Thanks</h1></>
    }



   function handlesubmit (e){
e.preventDefault();
alert(`message:- ${msg}`)
setSent(true)
   }
function value(e){
    setMsg(e.target.value)
}

  return (
    <div>
<form onSubmit={handlesubmit}>
    <input type='textarea' value={msg} onChange={value} />
    <button type='submit'>send</button>
</form>
      
    </div>
  )
}

export default Home
