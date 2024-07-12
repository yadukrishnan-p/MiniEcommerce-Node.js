const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./Config/connectDatabase')
dotenv.config({ path: path.join(__dirname, 'Config', 'config.env') })

const products = require('./Routes/product');
const orders = require('./Routes/order');


connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);


app.listen(process.env.PORT, () => {
   console.log(`server listiening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
