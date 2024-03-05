import { useState } from 'react'
import './App.css'
import SignIn from './SignIn.jsx'
import Diary from './Diary.jsx'
import Signup from './Signup.jsx'
import Diarydetails from './Diarydetails.jsx'
import axios from 'axios'



function App() {
  
 const [user,setUser]=useState("")
 const [view,setView]=useState("signin")
 const[refresh,setRefresh]=useState(false)
 const[selected,setSelected]=useState({})


 //!                              HANDLING ALL USER METHODES 
 //******************************************************************************************************* */
  const login = (username,password) =>{
  axios.post("http://localhost:3000/api/login",{
    username:username,
   password:password 
  }).then((result)=>{
    console.log(result)
 
    if(result.data==="incorrect infos"){                      //* handle the login event
      alert("incorrect information")
      setError(true)
      }
    else{
      
       setUser(result.data)
     
      setView("diary")

    }
  }).catch((error)=>{
    console.log(error)
  })
  }

   const createUser =(username,password,fullname)=>{
    axios.post("http://localhost:3000/api/users",{
      username:username,
      password:password,
      fullname:fullname                                      //* craete new user 
    }).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
   }

   const getOneUser = (id)=>{
    axios(`http://localhost:3000/api/users/${id}`).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
   }
//********************************************************************************************************** */



                                         //! HUNDLING  DIARIES METHODES
//************************************************************************************************************ */
   const createDiary = (title,description,date,users_idusers)=>{
    axios.post("http://localhost:3000/api/diary",{
    title:title,
    description:description,
    date:date,
    users_idusers:users_idusers 

    }).then((result)=>{
      console.log(result)
      setRefresh(!refresh)
    }).catch((error)=>{
      console.log(error)
    })
   }

   const deleteDiaary =(id)=>{
    axios.delete(`http://localhost:3000/api/diary/${id}`).then((result)=>{
      console.log(result)
      setRefresh(!refresh)

    }).catch((error)=>{
      console.log(error)
    })
   }


   const update = (title,description,id)=>{
    axios.put(`http://localhost:3000/api/diary/${id}`,{
      title:title,
      description:description
    }).then((result)=>{
      setView("diary")
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
   }
//************************************************************************************************************************ */




//!                              HANDLING VIEWS 
//******************************************************************************************************************************* */
  if (view==="signin"){
    return (
   
      <SignIn setview={setView} login={login}/>
    )
  }
  else if (view==="diary"){
    return(
     <Diary getOneuser={getOneUser} setselected={setSelected} refresh={refresh}  creatediary={createDiary} deleteDiary={deleteDiaary} setview={setView} user={user}    />
    )
  }
 

  else if (view=== "signup"){
    return (
      <Signup setview={setView} createuser={createUser}/>
    )
  }
  else if (view==="detail"){
    return (

    <Diarydetails update={update} diar={selected} />
    )
  }
  
}

export default App
