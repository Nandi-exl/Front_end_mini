require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./API/UserApi/UserRouter')
const productRouter = require('./API/ProductApi/ProductRouter')

app.use(bodyParser.json());
app.use(cookieparser());

app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', userRouter)
app.use('/', productRouter)

app.listen(PORT, () => {
  console.log(`server is Running on port ${PORT}`);
});
