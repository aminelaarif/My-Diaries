import React , {useState} from 'react'

function SignIn({login}) {
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
    <div>SignIn</div>
    <input type="text" placeholder='username' defaultValue={name}  onChange={onchange} />
    <input type="password" placeholder='password'  defaultValue={password} onChange={onchange1} />
    <button onClick={()=>{login(name,password)}} >sign in  </button>
    </div>
  )
}

export default SignIn