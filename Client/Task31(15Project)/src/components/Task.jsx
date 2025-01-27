import React, { useState } from 'react'

function Task() {
    const [msg,setMsg]=useState('');
    const [isSent,setIssent]=useState(false)
    if(isSent){
        return <h1>Thank You,... bye!...</h1>
    }
    function myInput(e){
        setMsg(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(`sending:${msg}`)
        setIssent(true)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <textarea placeholder='enter here' rows={5} cols={30} onChange={myInput} value={msg}></textarea>
        <button type='submit'>Click</button>
      </form>
    </div>
  )
}

export default Task
