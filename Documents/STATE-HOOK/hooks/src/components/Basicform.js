import React,{useState } from 'react'

const Basicform = () => {
    const [email, setemail] = useState( " ")
    const [password, setpassword] = useState( " ")
    const [entry, setentry] = useState([])
    const submitform=(e)=>{
        e.preventDefault()
        const newentry={id:new Date().getTime().toString(), email:email,password:password}
        setentry([...entry,newentry])
        console.log(newentry);
         setemail("")
         setpassword("")
    }
    return (
        <div>
             <form action="" onSubmit={submitform}>
            <div>
            <label htmlfor="email">Email</label>
             <input type="text" name="email" id="email" autoComplete="off" value= {email} onChange={(e)=>{
                  setemail(e.target.value)
             }}/>
            </div>
            <div>
                <label htmlfor="password"Password>password</label>
                <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                }}></input>
            </div>
            <button type="submit" >submit</button>
             </form>
             <div>
                 {
                     entry.map((currelem)=>{
                        return(
                            <div key={currelem.id}>
                                <p>
                                    {currelem.email}
                                </p>
                                <p>{currelem.password}</p>
                            </div>
                        )
                     })
                 }
             </div>
        </div>
    )
}

export default Basicform
