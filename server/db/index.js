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


const insertUser = (username,password)=>{
    const sql = "insert into `users` (username,password) values (?,?)"
    let result = connection.query(sql,[username,password])
}

const getAllDiaries = ()=>{
    const sql = "select * from `diary` "
     let result = connection.query(sql)
}


const addDiary = (title,description,date)=>{
    const sql = "insert into `diaries` (title,description,date) values(?,?,?) "
    let result = connection.query(sql,[title,description,date])
}

const deleteDiary = (id)=>{
    const sql = "delete from `diaries` where `id`=(?)"
    let result = connection.query(sql,[id])
}


const updateDiary =(title,description,id)=>{
    const sql = "update `diaries` set title=(?) , description=(?) where iddiary=(?)"
    let result = connection.query(sql,[title,description,id])
}


module.exports = {
    insertUser,
    getAllDiaries,
    addDiary,
    deleteDiary,
    updateDiary
}