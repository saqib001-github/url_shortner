import wrapAsync from "../utils/wrap-async.js";
import { loginUser, registerUser } from "../services/user.service.js";

export const register = wrapAsync(async (req, res) => {
  const { email, password,name } = req.body;
  const {token, user} = await registerUser(name,email,password);
  req.user = user;
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
     token,
  });
});
export const login = wrapAsync(async (req, res) => {
  const { email, password } = req.body;
  const {user, token} = await loginUser(email, password);
  req.user = user;
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    data: user,
     token,
  });
});

export const logout = wrapAsync(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
});

export const get_current_user = wrapAsync(async (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
});