const express = require("express") //import

const router = express.Router();
const {GetAllData , PostTodo, UpdateSelectedList,DeleteSelectedList,CompleteSelectedList} = require("../controller/TodoController")




router.get("/", GetAllData)

router.post("/post", PostTodo)

router.put("/update/:id", UpdateSelectedList)

router.delete("/delete/:id", DeleteSelectedList)

router.patch("/complete/:id", CompleteSelectedList)






module.exports = {router}