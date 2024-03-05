import React,{useState} from 'react'
import Diaries from './Diaries.jsx'
import Adddiary from './Adddiary.jsx'


function Diary(props) {
    
    
    
    console.log(props)
  return (
   <div>
    <div>
     <Adddiary creatediary={props.creatediary} setview={props.setview} user={props.user}/>
     </div>
   {props.userData.reverse().map((diar)=>{
  return(
    <div>
   
    
   <Diaries  deletediary={props.deleteDiary} createDiary={props.createDiary} diar={diar}/>
   </div>
   

  )
  

   })}
   </div>
  )
}

export default Diary