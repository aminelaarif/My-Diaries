const express = require('express');
const PORT = 3000;
const app = express();
var cors = require('cors')
app.use(express.json())
app.use(cors())
const {insertUser,getAllDiaries,addDiary,deleteDiary,getUsers,updateDiary,getOneUser,getOneDiary,getOneUserinfo} = require("../db/index")





////////////////////////////////////////////////////////////////////
app.post("/api/users",(req,res)=>{
    insertUser(req.body.username,req.body.password,req.body.fullname).then((result)=>{
        res.json(result[0])
    }).catch((error)=>{
        res.json(error)
    })
})
                                                                                
app.get("/api/users" ,(req,res)=>{                                            
getUsers().then((result)=>{
    res.json(result[0])
}).catch((error)=>{
    res.json(error)
})
})


app.post("/api/login",(req,res)=>{
    getOneUser(req.body.username,req.body.password).then((result)=>{
        
        const user=result[0][0]
        if(user){
          
            if(user.password===req.body.password){
                res.json(result[0][0])
               }
               else{
                res.json("wrong password")
               }
           
        }else{
           res.json("incorrect infos")
        }
       console.log(result,"fdf") 
    }).catch((error)=>{
       
        res.json(error);
    })
})



app.get("/api/users/:id",(req,res)=>{
    getOneUserinfo(req.params.id).then((result)=>{
        res.json(result[0])
    }).catch((error)=>{
        res.json(error)
    })
})
 

//////////////////////////////////////////////////////////////////



app.post("/api/diary" , (req,res)=>{
    addDiary(req.body.title,req.body.description,req.body.date,req.body.users_idusers).then((result)=>{
        res.json(result)
    }).catch((error)=>{
        res.json(error)
    })
} )

app.get("/api/diary",(req,res)=>{
    getAllDiaries().then((result)=>{
        res.json(result[0])
    }).catch((error)=>{
        res.json(error)
    })
})

app.get("/api/diary/:id",(req,res)=>{
  getOneDiary(req.params.id).then((result)=>{
    res.json(result[0])
  }).catch((error)=>{
    res.json(error)
  })
})


app.put("/api/diary/:id",(req,res)=>{
    updateDiary(req.body.title,req.body.description,req.params.id).then((result)=>{
        res.json(result)
    }).catch((error)=>{
        res.json(error)
    })
})


app.delete("/api/diary/:id",(req,res)=>{
    deleteDiary(req.params.id).then((result)=>{
        res.json(result)
    }).catch((error)=>{
        res.json(error)
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////




app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
  
  