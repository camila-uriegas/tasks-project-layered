import express from "express";
import tasksController from "../controller/tasks.controller.js";
import tasksMiddleware from "../middleware/tasks.middleware.js";

const router = express.Router();

router.get("/", tasksController.getTasks);
router.post("/", tasksMiddleware.validateNewTask, tasksController.createTask);



export default router;