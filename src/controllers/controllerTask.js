import mongoose from "mongoose";
import Task from "../models/task.js";

export const checkType = (req, res, next) => {
  const userId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid user ID format",
    });
  }
  next();
};

export const findTask = async (req, res) => {
  try {
    const task = Task.find({ user_id: req.params.id });
    const data = await task;

    if (data.length === 0) {
      throw new Error("No data found");
    }

    return res.status(200).json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const addTask = async (req, res) => {
  try {
    const data = {
      ...req.body,
      priority: Number(req.body.priority),
      user_id: req.params.id,
    };
    const task = new Task(data);
    const result = await task.save();
    return res.status(200).json({
      status: "success",
      message: "Added data successfully",
      data: result,
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const data = await Task.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: "success",
      message: "Deleted data successfully",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskUpdate = req.body;
    const data = await Task.findByIdAndUpdate(req.params.id, taskUpdate);
    if (!data) {
      throw new Error("No id found");
    }
    return res
      .status(200)
      .json({ status: "success", message: "Updated data successfully", data });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const allTask = async (req, res) => {
  try {
    const allTask = await Task.find();
    if (!allTask) {
      throw new Error("No data");
    }
    return res.status(200).json({
      status: "success",
      result: allTask.length,
      data: allTask,
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
