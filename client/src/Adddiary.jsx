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
    <div>
        <h1 onClick={()=>{props.setview("add")}}>new diary</h1>
    <input type="text"    placeholder='title' onChange={onchange} />
    <input type="text"    placeholder='description' onChange={onchange1} />
    <input type="text"    placeholder='date' onChange={onchange2} />
    <button onClick={()=>{props.creatediary(title,description,date,props.user)}} >submit</button>
    </div>
  )
}

export default Adddiary