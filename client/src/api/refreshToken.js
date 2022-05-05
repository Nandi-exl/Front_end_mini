import axios from "axios";
const rootUrl = 'http://localhost:5000';
const rToken = rootUrl + '/refresh_token';

export const refreshToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(rToken, {
        withCredentials: true,
      });
      const token = response.data.accessToken;
      return resolve(token);
    } catch (error) {
      return reject(error);
    }
  });
};
