import React, { useState,useEffect } from 'react'
import GitHubUsers from '../components/GitHubUsers'
import Loading from './Loading'
const UseEffectAPI = () => {
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const getUsers=async()=>{
        try {
            setLoading(false)
            const response=await fetch('https://api.github.com/users');
   setUsers(await response.json())
        } catch (error) {
            console.log(error);
        }
   
   
    }
    
    useEffect(()=>{
        getUsers();
    },[])
    if(loading){
        return<Loading/>
    }
    return (<>
    
     <GitHubUsers users={users}/>
    
        </>
    )
}

export default UseEffectAPI
