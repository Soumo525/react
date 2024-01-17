import React, { useEffect, useState } from 'react'
let time ;
console.log(time);
function Clock() {
    // let time = new Date().toLocaleTimeString()
    let [timeShow , setTimeShow ] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
      setInterval(() => {
       let time =  setTimeShow(new Date().toLocaleTimeString())
      }, 1000);
    
      return () => {
       clearInterval(time)
       console.log("Clean");
      }
    }, [])
    
  return (
    <div>
        {timeShow}
    </div>
  )
}

export default Clock