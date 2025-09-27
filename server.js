const express = require("express") //import
require("./DB/DB.js")
const { router } = require("./routes/TodoList.js")
const cors = require("cors")


const app = express(); // Create our Own Server


app.use(cors())
app.use(express.json())
app.use(router);




// app.listen(7000 , () => {

//     console.log("Server is LIVE on Port 7000");
    

// })


module.exports = app



