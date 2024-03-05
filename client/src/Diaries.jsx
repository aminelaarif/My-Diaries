import React, { useEffect, useState } from 'react'
function Diaries({ diar, deletediary ,setview,setselected ,setRefresh}) {


  return (


    <div className="diary-container">
      <h1  onClick={()=>{
        setselected(diar)
        setview("detail")
      }} className="diary-title"> {diar.title}</h1>
      <h1 className="diary-description"> {diar.description}</h1>
      <h1 className="diary-date" >{diar.date}</h1>

      <button className="diary-delete-button" onClick={() => {
        deletediary(diar.iddiary)
        setRefresh(!refresh)
      }} >delete</button>



    </div>



  )
}

export default Diaries