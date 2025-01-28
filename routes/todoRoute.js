const express = require("express");
const Todo = require("../models/todoModel")
const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
router.post("/", async(req,res)=>{
    const todo = new Todo({
        task:req.body.task,
    });
    try{
        const saveTodo = await todo.save()
        res.status(201).json(saveTodo)
    }
    catch(err){
        res.status(400).json({message:errr.message})
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id)
        res.json({message:"Task Deleted!"});
    }
    catch{
        res.status(500).json({message:er.message})
    }
});

module.exports = router;