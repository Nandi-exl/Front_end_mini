const express = require('express');
const userRouter = express.Router();
const UserControl = require('./UserController');
const CheckToken = require('../../Auth/Auth.js');

userRouter.get('/users', CheckToken.authorize, UserControl.GetAllUser);
userRouter.post('/register', UserControl.AddUser);
userRouter.post('/login', UserControl.UserLogin);
userRouter.patch('/update_user/:id', UserControl.UpdateUser);
userRouter.delete('/delete_user/:id', UserControl.DeleteUser);
userRouter.post('/refresh_token', UserControl.RefreshToken);

module.exports = userRouter;
