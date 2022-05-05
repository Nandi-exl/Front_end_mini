const { sign } = require('jsonwebtoken');

const createAccessToken = (id, name, email) => {
  return sign({ id, name, email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s',
  });
};

const createRefreshToken = (id, name, email) => {
  return sign({ id, name, email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '1d',
  });
};

const sendAccessToken = (req, res, accestoken) => {
  // res.cookie('accesstoken', accestoken, {
  //   httpOnly: true,
  //   path: '/',
  // });
  res.send({
    accestoken,
    email: req.body.email,
  });
};

const sendRefreshToken = (res, refreshtoken) => {
  res.cookie('refreshtoken', refreshtoken, {
    httpOnly: true,
    path: '/refresh_token',
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
};
