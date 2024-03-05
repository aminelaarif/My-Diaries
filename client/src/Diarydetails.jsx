import React, { useState } from 'react'

function Diarydetails({ diar,update}) {
    console.log(diar)
    
    const [title, setName] = useState("")
    const [description, setPassword] = useState("")

    const onchange = (e) => {
        setName(e.target.value)
    }
    const onchange1 = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="diary-container" >
            <h1 className="diary-title" >{diar.title}</h1>
            <h2 className="diary-description" >{diar.description}</h2>
            <h2 className="diary-date" >{diar.date}</h2>
            <input className="signin-input" type="text" placeholder='new title' defaultValue={title} onChange={onchange} />
            <input className="signin-input" type="text  " placeholder='new description' defaultValue={description} onChange={onchange1} />
            <button onClick={()=>{update(title,description,diar.iddiary)}} >update</button>
        </div>
    )


}

export default Diarydetails