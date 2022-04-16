const UserModel = require('./UserModel');
const { hash, compareSync } = require('bcrypt');
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('../../token/token.js');
const { verify } = require('jsonwebtoken');

class UserController {
  //create table
  static async GetAllUser(req, res) {
    const data = await UserModel.GetAllUser();
    res.status(200).json(data);
  }

  static async AddUser(req, res) {
    const addUser = req.body;
    const password = addUser.password;
    const hashPasword = await hash(password, 10);
    const newUser = await UserModel.AddUser(addUser, hashPasword);
    res.status(200).json(newUser);
  }

  static async UserLogin(req, res) {
    try {
      const body = req.body;
      const user = await UserModel.UserLogin(body.name);
      console.log(user[0].password);
      const valid = compareSync(body.password, user[0].password);
      if (!valid) {
        return res.status(404).json({ accesstoken: 'invalid' });
      }

      const accessToken = createAccessToken(user[0].id);
      const refreshToken = createRefreshToken(user[0].id);

      //push refresh token to database
      await UserModel.PushRefreshToken(refreshToken, body.name);

      sendRefreshToken(res, refreshToken);
      sendAccessToken(req, res, accessToken);
      console.log(user);
    } catch (error) {
      res.send({
        error: `${error.message}`,
      });
    }
  }

  static async UpdateUser(req, res) {
    const data = req.body;
    const id = req.params.id;
    const update = await UserModel.UpdateUser(data, id);
    res.status(200).json({ message: `${id} updated` });
  }

  static async DeleteUser(req, res) {
    const id = req.params.id;
    const userDelete = await UserModel.DeletUser(id);
    res.status(200).json({ message: `${id} is deleted` });
  }

  static async logOut(req, res) {
    //log out harus menggunakan token
    //agar body clear dan user tidak bisa mengakses lagi
    //dan tidak menggunakan parameter
    const data = req.params;
    res.ClearCookie('refreshtoken', { path: '/refresh_token' });
    await UserModel.RemoveRefreshToken(data.id);
    return res.json({
      message: `user ${id} has logged out`,
    });
  }

  static async RefreshToken(req, res) {
    const token = req.cookies.refreshtoken;
    if (!token) {
      return res.status(404).json({ accessToken: '' });
    }

    let payload = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
      return res.status(404).json({ accessToken: '' });
    }

    const existUser = await UserModel.GetAllUser();
    const checkUser = existUser.find((user) => user.id === payload.id);
    try {
      if (!checkUser) {
        res.status(400).json({ accessToken: '' });
      }
    } catch (error) {
      res.json(`${error.message}`);
    }

    if (checkUser.refreshToken != token) {
      return res.status(404).json({ accessToken: '' });
    }

    const accessToken = createAccessToken(checkUser.id);
    const refreshToken = createRefreshToken(checkUser.id);

    checkUser.refreshToken = refreshToken;

    sendRefreshToken(res, refreshToken);
    return res.send({ accessToken });
  }
}

module.exports = UserController;
