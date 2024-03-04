import React,{useState} from 'react'
import Diaries from './Diaries'

function Diary(props) {
    
    
    
    console.log(props)
  return (
   <div>
   {props.userData.map((ele)=>{
  return(
    <li>{ele.title}</li>
  )
  
   })}
   </div>
  )
}

export default Diary