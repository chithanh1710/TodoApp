import User from "../models/user.js";

export const createUser = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      return res.status(200).json({
        status: "success",
        message: "Sign Up Success",
      });
    })
    .catch((err) =>
      res.status(404).json({
        status: "fail",
        message: "Account already exists",
      })
    );
};

export const checkUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (password === user.password) {
        return res.redirect("/task/" + user._id);
      }
      return res.status(404).json({
        status: "fail",
        message: "Wrong password",
      });
    })
    .catch(() =>
      res.status(404).json({
        status: "fail",
        message: "Account not found",
      })
    );
};
