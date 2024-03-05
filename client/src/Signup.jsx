import React,{useState} from 'react'



function Signup({createuser}) {
 const [name,setName]=useState("")
const [password,setPassword]=useState("")

const onchange = (e)=>{
setName(e.target.value)
}
const onchange1=(e)=>{
    setPassword(e.target.value)
}
  return (
    <div>
        <h1>create account</h1>
    <input type="text" placeholder='username' defaultValue={name}  onChange={onchange} />
    <input type="password" placeholder='password'  defaultValue={password} onChange={onchange1} />
    <button onClick={()=>{createuser(name,password)}} >create</button>
    </div>
  )
}

export default Signup