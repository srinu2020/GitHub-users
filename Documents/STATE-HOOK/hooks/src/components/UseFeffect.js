import React,{useState,useEffect} from 'react'

const UseFeffect = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title=`Chat(${count})`
    },[count] )
   
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)

        }}></button>

        </>
    )
}

export default UseFeffect
