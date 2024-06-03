import express from "express";
import {
  addTask,
  checkType,
  deleteTask,
  findTask,
  updateTask,
  allTask,
} from "../controllers/controllerTask.js";
const router = express.Router();

router
  .route("/task/:id")
  .get(checkType, findTask)
  .post(checkType, addTask)
  .delete(checkType, deleteTask)
  .patch(checkType, updateTask);

router.route("/task").get(allTask);

export default router;
