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
  static async GetAllUser(req, res) {
    const data = await UserModel.GetAllUser();
    res.status(200).json(data);
  }

  static async GetUserById(req, res) {
    const id = req.params.id;
    const data = await UserModel.GetUserById(id);
    if (!data) {
      return res.status(404).json({ msg: 'user is undefined' });
    }
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
      const user = await UserModel.UserLogin(body.email);
      const valid = compareSync(body.password, user[0].password);
      if (!valid) {
        return res.status(404).json({ accesstoken: 'invalid' });
      }

      const accessToken = createAccessToken(
        user[0].id,
        user[0].name,
        user[0].email
      );
      const refreshToken = createRefreshToken(
        user[0].id,
        user[0].name,
        user[0].email
      );

      //push refresh token to database
      await UserModel.PushRefreshToken(refreshToken, body.email);

      sendRefreshToken(res, refreshToken);
      sendAccessToken(req, res, accessToken);
    } catch (error) {
      // res.status(404)
      res.json({
        error: `password or email is wrong`,
      });
    }
  }

  static async UpdateUser(req, res) {
    const data = req.body;
    const id = req.params.id;
    const password = req.body.password;
    const hashedPassword = await hash(password, 10);
    await UserModel.UpdateUser(data, id, hashedPassword);
    res.status(200).json({ message: `${id} updated` });
  }

  static async DeleteUser(req, res) {
    const id = req.params.id;
    await UserModel.DeletUser(id);
    res.status(200).json({ message: `${id} is deleted` });
  }

  static async RefreshToken(req, res) {
    const token = req.cookies.refreshtoken;
    if (!token) {
      return res.status(404).json({ accessToken: 'token not exist' });
    }

    let payload = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
      return res.status(404).json({ accessToken: 'token is not verified' });
    }

    const existUser = await UserModel.GetAllUserToken();
    const checkUser = existUser.find((user) => user.id === payload.id);

    // console.log("check user", checkUser);
    try {
      if (!checkUser) {
        res.status(400).json({ accessToken: 'user not exist' });
      }
    } catch (error) {
      res.json(`${error.message}`);
    }

    if (checkUser.refreshToken != token) {
      return res
        .status(404)
        .json({ accessToken: 'user refresh token is not the same with token' });
    }

    const accessToken = createAccessToken(
      checkUser.id,
      checkUser.name,
      checkUser.email
    );
    const refreshToken = createRefreshToken(
      checkUser.id,
      checkUser.name,
      checkUser.email
    );

    console.log('new accestoken', accessToken);
    console.log('new refreshtoken', refreshToken);
    //push new refresh token to db
    await UserModel.PushRefreshToken(refreshToken, checkUser.email);

    sendRefreshToken(res, refreshToken);
    return res.send({ accessToken });
  }

  static async logOut(req, res) {
    //log out harus menggunakan token
    //agar body clear dan user tidak bisa mengakses lagi
    //dan tidak menggunakan parameter
    try {
      await UserModel.RemoveRefreshToken(req.user.email);
      res.clearCookie('refreshtoken', { path: '/refresh_token' });
      return res.json({
        message: `user has logged out`,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = UserController;
