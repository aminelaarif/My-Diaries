import React,{useState} from 'react'

function Diaries({diar, deletediary}) {
//   console.log(diaries)
  console.log( deletediary)
  return (
    
    
    <div>
       <h1> {diar.title}</h1>
        <h1> {diar.description}</h1>
        <h1>{diar.date}</h1>
        <h1>{diar.iddiary}</h1>
      <button onClick={()=>{deletediary(diar.iddiary)}} >delete</button>
    

        
        </div>

        
     
  )
}

export default Diaries