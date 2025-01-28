import React, { useState } from 'react'

 function Task1() {
    const [num,setNum]=useState(0);
    const [newNum,setNewNum]=useState(0)
   
  async function btn(){
    setNum(num=>num+1);
    await delay(3000);
    setNum(num=>num-1);
    setNewNum(newNum=>newNum+1)
   }
  
    
  return (
    <div>
      {/* <video width={'400px'} height={'300px'} controls>
        <source src='https://videos.pexels.com/video-files/29753519/12787590_2560_1440_60fps.mp4' type="video/mp4"/>
      </video> */}
      <h3>Pending:<span>{num}</span></h3>
      <h3>Completed:<span>{newNum}</span></h3>
      <button onClick={btn}>Buy</button>
    </div>
  )
}

function delay(e){
return new Promise(resolve=>{
   setTimeout(resolve,e);
});

}

export default Task1
