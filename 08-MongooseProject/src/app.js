import express from "express";
import './db/config.js'
import { studentsmanager } from "./studentsManager.js";

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', async(req,res)=> {
    const students = await studentsmanager.findAll();
    res.json({message:'Students', students});
})

app.get('/:sid', async(req,res) => {
    const {sid} = req.params;

    const student = await studentsmanager.findByID(sid);
    res.json({message:'Student', student}); 
})

app.post('/', async(req,res) => {
    const createdStudent = await studentsmanager.createOne(req.body);
    res.json({message: "Student created", student: createdStudent});
})

app.delete('/:sid', async(req,res) => {
    const {sid} = req.params;
    const deletedStudent = await studentsmanager.deleteOne(sid);
    res.json({message:'Student deleted', student: deletedStudent});
})

app.listen(PORT, () => {
    console.log("Listening on port: 8080\nhttp://localhost:8080/")
})