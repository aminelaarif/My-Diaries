import { useState } from 'react'
import './App.css'
import SignIn from './SignIn.jsx'
import Diary from './Diary.jsx'
import Adddiary from './Adddiary.jsx'
import Signup from './Signup.jsx'
import axios from 'axios'

function App() {
  
 const [user,setUser]=useState("")
 const [view,setView]=useState("signin")
 const [userdata,setUserdata]=useState([])  


  const login = (username,password) =>{
  axios.post("http://localhost:3000/api/login",{
    username:username,
   password:password 
  }).then((result)=>{
    
     setUser(result.data.idusers)
    getOne(result.data.idusers)
    setView("diary")
  }).catch((error)=>{
    console.log(error)
  })
  }

  const getOne = (id)=>{
    axios.get(`http://localhost:3000/api/diary/${id}`).then((result)=>{
      console.log(result)
       setUserdata(result.data.reverse())
    }).catch((error)=>{
      console.log(error)
    })
   }


   const createUser =(username,password)=>{
    axios.post("http://localhost:3000/api/users",{
      username:username,
      password:password
    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
   }

   const createDiary = (title,description,date,users_idusers)=>{
    axios.post("http://localhost:3000/api/diary",{
    title:title,
    description:description,
    date:date,
    users_idusers:users_idusers

    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
   }

   const deleteDiaary =(id)=>{
    axios.delete(`http://localhost:3000/api/diary/${id}`).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
   }

  if (view==="signin"){
    return (
   
      <SignIn setview={setView} login={login}/>
    )
  }
  else if (view==="diary"){
    return(
     <Diary  deleteDiary={deleteDiaary} setview={setView} user={user}   userData={userdata} />
    )
  }
  else if (view==="add"){
    return (
      <Adddiary creatediary={createDiary} user={user}/>
    )
  }

  else if (view=== "signup"){
    return (
      <Signup createuser={createUser}/>
    )
  }
  
}

export default App
