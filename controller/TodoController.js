const mongoose = require('mongoose')
const TodoListModel = require("../models/TodoModel")




const GetAllData =  async (req,res) => {
    
   try {

    const Data = await TodoListModel.find({})
    
    console.log(Data);
    
    res.json({ message:"List Fetched Sucessfully" , status:1 , Data })

   } catch (error) {
        console.log(error.message);
   }
    
  
    
}



const PostTodo = async  (req,res) => {

    const {Todo} = req.body
    


    if(!Todo)
    {
        res.send("All Fields must be Filled")
        return   
    }
   
   const newList = await TodoListModel.create({Todo})

  
   
   res.json({ message:"List Posted Sucessfully" , status:1 , newList })
}


const UpdateSelectedList = async (req,res) => {

    const {Todo} = req.body
    const {id} = req.params

    if(!mongoose.isValidObjectId(id))
        return res.json({ message:"ID not found" , status:0 })

    if(!Todo)
        return res.json({ message:"Todo is Empty" , status:0 })

    const newList = { Todo }

    const UpdatedList = await TodoListModel.findByIdAndUpdate(id,newList)

    if(!UpdatedList)
        return   res.json({ message:"Updated ID Not Matched" , status:0 })



    return  res.json({ message:"List Updated Sucessfully" , status:1 });

}


const DeleteSelectedList = async (req,res) => {

    
    const {id} = req.params

    if(!mongoose.isValidObjectId(id))
        return res.json({ message:"ID not found" , status:0 })

    

    

    const UpdatedList = await TodoListModel.findByIdAndDelete( id )

    if(!UpdatedList)
        return   res.json({ message:"Deleted ID Not Matched" , status:0 })



    return  res.json({ message:"List Deleted Sucessfully" , status:1 });

}

const CompleteSelectedList = async (req,res) => {

    const {isCompleted} = req.body
    const {id} = req.params

    
    if(!mongoose.isValidObjectId(id))
        return res.json({ message:"ID not found" , status:0 })

    const UpdatedList = await TodoListModel.findByIdAndUpdate(id,{isCompleted} , {new:true})

    if(!UpdatedList)
        return   res.json({ message:"List ID Not Matched" , status:0 })


    return  res.json({ message:"List Completed Sucessfully" , status:1 });

}



module.exports = {GetAllData , PostTodo , UpdateSelectedList,DeleteSelectedList,CompleteSelectedList}


