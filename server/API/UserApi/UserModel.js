const { User } = require('../../config/setup');
class UserModel {
  static async GetAllUser() {
    const users = await User.findAll();
    return new Promise((resolve, rejects) => {
      resolve(users);
    });
  }

  static async AddUser(data, hashPasword) {
    const addUser = await User.create({
      name: data.name,
      password: hashPasword,
      adress: data.adress,
      phone_number: data.phone_number,
    });
    return new Promise((resolve, reject) => {
      resolve(addUser);
    });
  }

  static async UpdateUser(data, id) {
    const update = await User.update({
      name: data.name,
      password: data.password,
      adress: data.adress,
      phone_number: data.phone_number,
      
    }, {
      where : {
        id : id
      }
    });
    return new Promise((resolve, reject) => {
      resolve(update);
    });
  }

  static async DeletUser(id){
    const deleteUser = await User.destroy({
      where : {
        id : id
      }
    })
    new Promise ((resolve, reject) => {
      resolve(deleteUser)
    })
  }

  static async UserLogin(name) {
    const login = await User.findAll({
      where: {
        name: name,
      },
    });
    return new Promise((resolve, reject) => {
      resolve(login);
    });
  }

  static async PushRefreshToken(refreshToken, name) {
    const push = await User.update(
      {
        refreshToken: refreshToken,
      },
      {
        where: {
          name: name,
        },
      }
    );
    return new Promise((resolve, reject) => {
      resolve(push);
    });
  }

  static async RemoveRefreshToken(id) {
    const remove = await User.update(
      {
        refreshToken: null,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return new Promise((resolve, reject) => {
      resolve(remove);
    });
  }
}

module.exports = UserModel;
