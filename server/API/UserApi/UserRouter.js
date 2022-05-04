const express = require('express');
const userRouter = express.Router();
const UserControl = require('./UserController');
const CheckToken = require('../../Auth/Auth.js');

userRouter.get('/users', CheckToken.authenticate, UserControl.GetAllUser);
userRouter.post('/register', UserControl.AddUser);
userRouter.post('/login', UserControl.UserLogin);
userRouter.delete('/logout', CheckToken.authenticate, UserControl.logOut);
userRouter.patch(
  '/update_user/:id',
  CheckToken.authenticate,
  UserControl.UpdateUser
);
userRouter.delete('/delete_user/:id', UserControl.DeleteUser);
userRouter.get('/refresh_token', UserControl.RefreshToken);
userRouter.get('/user_detail/:id', UserControl.GetUserById);

module.exports = userRouter;
