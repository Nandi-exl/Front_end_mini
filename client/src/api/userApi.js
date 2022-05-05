import axios from 'axios';
import { refreshToken } from './refreshToken';

const rootUrl = 'http://localhost:5000';
const loginUrl = rootUrl + '/login';
const logOutUrl = rootUrl + '/logout';
const users = rootUrl + '/users';
const registerUrl = rootUrl + '/register';

//axios interceptor so the token will no need tp refresh


export const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(users, {
        headers: {
          Authorization: `Bearer ${await refreshToken()}`,
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await axios.get(`http://localhost:5000/user_detail/${id}`);
      console.log(user.data);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const userLoginApi = (frmdata) => {
  return new Promise(async (resolve, reject) => {
    try {
      //frm data is object
      const token = await axios.post(loginUrl, frmdata, {
        withCredentials: true, //to call access token in client cookies
      });
      console.log('ths is token', token.data);
      resolve(token.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const userLogOut = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(logOutUrl, {
        headers: {
          Authorization: `Bearer ${await refreshToken()}`,
        },
      });
      console.log(response);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const register = (frmdata) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(registerUrl, frmdata);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/delete_user/${id}`
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateUser = (id, frmdata) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        `http://localhost:5000/update_user/${id}`,
        frmdata,
        {
          headers: {
            Authorization: `Bearer ${await refreshToken()}`,
          },
        }
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
