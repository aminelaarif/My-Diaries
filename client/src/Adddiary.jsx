import React,{useState} from 'react'

function Adddiary(props) {
    console.log(props)
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [date,setDate]=useState("")

    const onchange = (e)=>{
        setTitle(e.target.value)
        
    }
    const onchange1 = (e)=>{
        setDescription(e.target.value)                 
        
    }
    const onchange2 = (e)=>{    
        setDate(e.target.value) 
       
    }
    
    
  return (
    <div className="diary-container" >
        <h1 className="adddiary-header" >My Diaries </h1>
        <h1 className="user_info">
         Welcome to {props.user.fullname}  Diaries 
        </h1>
    <input type="text"  className="diary-input"  placeholder='title' onChange={onchange} />
    <input type="text"  className="diary-input" placeholder='description' onChange={onchange1} />
    <input type="text"  className="diary-input"  placeholder='date' onChange={onchange2} />
    <button  className="submit-button" onClick={()=>{props.creatediary(title,description,date,props.user.idusers)}} >submit</button>  
    </div>
  )
}

export default Adddiary