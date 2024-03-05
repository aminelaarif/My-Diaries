import React,{useState} from 'react'



function Signup({createuser,setview}) {
 const [name,setName]=useState("")
const [password,setPassword]=useState("")
const [fullname,setFullname]=useState("")
const onchange = (e)=>{
setName(e.target.value)
}
const onchange1=(e)=>{
    setPassword(e.target.value)
}
const onchange2=(e)=>{
  setFullname(e.target.value)
}
  return (
    <div className="create-account-container" >
        <h1 className="create-account-heading" >create account</h1>
    <input className="create-account-input" type="text" placeholder='username' defaultValue={name}  onChange={onchange} />
    <input  className="create-account-input" type="password" placeholder='password'  defaultValue={password} onChange={onchange1} />
    <input  className="create-account-input" type="text" placeholder='fullname'  defaultValue={fullname} onChange={onchange2} />
    <button className="create-account-button" onClick={()=>{
      createuser(name,password,fullname)
      setview("signin")
      }} >create</button>
     
    </div>
  )
}

export default Signup