const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amine123',
  database: 'my_diaries'
}).promise()


connection.connect().then(()=>{
    console.log("db connected")
}).catch((error)=>{
    console.log(error)
})


//!                         USERS QUERY 
//************************************************************************************* */

const insertUser = (username,password,fullname)=>{
    const sql = "insert into `users` (username,password,fullname) values (?,?,?)"
    let result = connection.query(sql,[username,password,fullname])
    return result
}


const getUsers = ()=>{
    const sql ="select * from `users` "
    let result = connection.query(sql)
    return result 
}


const getOneUser=(username,password)=>{
  const sql = "select * from `users` where `username`=(?) and `password`=(?)"
  let result = connection.query(sql,[username,password])
  return result
}

const getOneUserinfo=(id)=>{
    const sql = "select * from `users` where `idusers`=(?)"
    let result = connection.query(sql,[id]) 
    return result
}



//****************************************************************************************************** */



//!                                     DIARIES QUERY 
//********************************************************************************************************* */

const getAllDiaries = ()=>{
    const sql = "select * from `diary` "
     let result = connection.query(sql)
     return result
}


const getOneDiary = (id)=>{
    const sql = "select * from `diary` where `users_idusers`=(?)"
    let result = connection.query(sql,[id])
    return result
}

const addDiary = (title,description,date,id)=>{
    const sql = "insert into `diary` (title,description,date,users_idusers) values(?,?,?,?) "
    let result = connection.query(sql,[title,description,date,id])
    return result
}

const deleteDiary = (id)=>{
    const sql = "delete from `diary` where `iddiary`=(?)"
    let result = connection.query(sql,[id])
    return result
}


const updateDiary =(title,description,id)=>{
    const sql = "update `diary` set title=(?) , description=(?) where iddiary=(?)"
    let result = connection.query(sql,[title,description,id])
    return result
}
//*********************************************************************** */

module.exports = {
    insertUser,
    getAllDiaries,
    addDiary,
    deleteDiary,
    updateDiary,
    getUsers,
    getOneUser,
    getOneDiary,
    getOneUserinfo
}