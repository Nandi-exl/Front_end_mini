const { User } = require('../../config/setup');
class UserModel {
  static async GetAllUser() {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'adress', 'phone_number'],
    });
    return new Promise((resolve, rejects) => {
      resolve(users);
    });
  }

  static async GetUserById(id) {
    const user = await User.findAll(
      {
        where: {
          id: id,
        },
      },
      {
        attributes: ['id', 'name', 'email', 'adress', 'phone_number'],
      }
    );
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }

  //this is for validation of refreshtoken because in get All user i dont include the info of refresh token
  static async GetAllUserToken() {
    const users = await User.findAll();
    return new Promise((resolve, rejects) => {
      resolve(users);
    });
  }

  static async AddUser(data, hashPasword) {
    const addUser = await User.create({
      name: data.name,
      email: data.email,
      password: hashPasword,
      adress: data.adress,
      phone_number: data.phone_number,
    });
    return new Promise((resolve, reject) => {
      resolve(addUser);
    });
  }

  static async UpdateUser(data, id, hashedPassword) {
    const update = await User.update(
      {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        adress: data.adress,
        phone_number: data.phone_number,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return new Promise((resolve, reject) => {
      resolve(update);
    });
  }

  static async DeletUser(id) {
    const deleteUser = await User.destroy({
      where: {
        id: id,
      },
    });
    new Promise((resolve, reject) => {
      resolve(deleteUser);
    });
  }

  static async UserLogin(email) {
    const login = await User.findAll({
      where: {
        email: email,
      },
    });
    return new Promise((resolve, reject) => {
      resolve(login);
    });
  }

  static async PushRefreshToken(refreshToken, email) {
    const push = await User.update(
      {
        refreshToken: refreshToken,
      },
      {
        where: {
          email: email,
        },
      }
    );
    return new Promise((resolve, reject) => {
      resolve(push);
    });
  }

  static async RemoveRefreshToken(email) {
    const remove = await User.update(
      {
        refreshToken: null,
      },
      {
        where: {
          email: email,
        },
      }
    );
    return new Promise((resolve, reject) => {
      resolve(remove);
    });
  }
}

module.exports = UserModel;
