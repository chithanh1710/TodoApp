import express from "express";
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("<h1>Welcome to Yidi Todo App</h1>");
});

export default router;
