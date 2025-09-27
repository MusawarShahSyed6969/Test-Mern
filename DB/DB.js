const mongoose = require("mongoose") 




mongoose.connect( "mongodb+srv://tempo7691_db_user:hW6wbN81THEjy3d7@cluster0.m9qkobc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ).then(
    console.log("Database Connected")
    
).catch( err => {
    console.log(err.message);
    
})