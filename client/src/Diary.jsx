import React,{useState,useEffect} from 'react'
import Diaries from './Diaries.jsx'
import Adddiary from './Adddiary.jsx'
import axios from 'axios'


function Diary(props) {
  const [userdata,setUserdata]=useState([]) 
  const [userinfo,setUserinfo]=useState([]) 



  console.log(props.user);



  
  useEffect(()=>{
    const getOne = (id)=>{
      axios.get(`http://localhost:3000/api/diary/${id}`).then((result)=>{
        console.log(result)
         setUserdata(result.data.reverse())
      }).catch((error)=>{
        console.log(error)
      })
     }
  getOne(props.user.idusers)
  },[props.refresh])
    
    
    console.log(props)
  return (
   <div>
    <div>
     <Adddiary  creatediary={props.creatediary} setview={props.setview} user={props.user}/>
     </div>
   {userdata.map((diar)=>{
  return(
    <div>
   
    
   <Diaries setselected={props.setselected} setview={props.setview}  deletediary={props.deleteDiary} createDiary={props.createDiary} diar={diar}/>
   </div>
   

  )
  

   })}
   </div>
  )
}

export default Diary