import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
    res.json(tasks);
});


const tasks = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];


export default tasks;