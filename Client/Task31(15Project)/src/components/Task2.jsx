import React, { useState } from 'react'

function Task2() {
    const [msg,setMsg]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        setMsg(prompt("enter"))
        alert(`message:${msg}`)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <button type='submit'>Click</button>
        </form>
      
    </div>
  )
}

export default Task2

// import React, { useState } from 'react'

// function Task2() {
    
//     function handleSubmit(){
//        let name =(prompt("enter"))
//         alert(`message:${name}`)
//     }
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit}>
//         <button type='submit'>Click</button>
//         </form>
      
//     </div>
//   )
// }

// export default Task2
