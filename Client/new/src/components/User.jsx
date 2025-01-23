import React, { useState } from 'react'

function User() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  let arr=[]
  function myfn(e){
    
   let obj1={email,password}
   arr.push(obj1)
   console.log(arr)
  }

  return (
    <div className='container1'>
      <div className='upper'>
      </div>
     <form action="" >
      <label className='label1'>Email</label><br/>
      <input type="text" placeholder='John@gmail.com' onChange={(e)=>setEmail(e.target.value)} style={{ width: '330px', height: '30px', padding: '5px',alignItems:'center' }}/><br/>
      <label className='label1'>Password</label><br/>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  style={{ width: '330px', height: '30px', padding: '5px' }} /><br/>
      <div className='secondDiv'>
        <div>
        <input type='checkbox'/>
        <label style={{width:'100%'}}>Remember Me</label>
        </div>
        <div>
        <a style={{textDecoration:'none',color:'white'}}href=''>Forgot Password</a><br/>
        </div>
      </div>
     <div className='lastDiv'>
      <div>
      <button type='submit' onClick={myfn()} style={{ width: '282px', height: '45px', padding: '5px',backgroundColor:'#006A67',color:'white',border:'none' }}>Sumit</button> 
      </div>
      <div>
      <button type='reset'  style={{ width: '60px', height: '45px', padding: '5px',backgroundColor:'#FFF4B7',border:'none' }}>Reset</button><br/>
      </div>
     </div>
     <div>
       <p>{email}</p>
       <p>{password}</p>
     </div>


     </form>
    </div>
  )
}

export default User
