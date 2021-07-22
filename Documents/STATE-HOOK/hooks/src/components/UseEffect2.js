import React,{useState,useEffect} from 'react'

const UseEffect2 = () => {
    const[widthcount,setwidthcount]=useState(window.screen.width )
    const actualwidth=()=>{
         setwidthcount(window.innerWidth)
    }
    useEffect(() => {
        console.log("add event");
        window.addEventListener('resize',actualwidth)
     return()=>{
     console.log("remove event");
     window.removeEventListener('resize',actualwidth)
     }
    } )
    return (
        <div>
        <p>the actual size of the window is :</p>
            <h1>{widthcount}</h1>
        </div>
    )
}

export default UseEffect2
