const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json())
const {insertUser,getAllDiaries,addDiary,deleteDiary,updateDiary} = require("../db/index")














app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
  
  