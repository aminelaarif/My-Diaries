import { useState } from 'react'
import './App.css'
import SignIn from './SignIn.jsx'
import Diary from './Diary.jsx'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
 const [user,setUser]=useState("")
 const [view,setView]=useState("signin")
 const [userdata,setUserdata]=useState([])
  
 



  const login = (username,password) =>{
  axios.post("http://localhost:3000/api/login",{
    username:username,
   password:password 
  }).then((result)=>{
   
    getOne(result.data.idusers)
    setView("diary")
  }).catch((error)=>{
    console.log(error)
  })


  
  }

  const getOne = (id)=>{
    axios.get(`http://localhost:3000/api/diary/${id}`).then((result)=>{
      console.log(result)
       setUserdata(result.data)
    }).catch((error)=>{
      console.log(error)
    })
   }

  if (view==="signin"){
    return (
   
      <SignIn login={login}/>
    )
  }
  else if (view==="diary"){
    return(
     <Diary   userData={userdata} />
    )
  }
  
}

export default App
