const express = require("express");
const logger = require("morgan");       // NOTE: for debugging
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("dev"));                 // app.use(logger("combined"));
 
// const {orderRouter, restaurantRouter, userRouter} = require("./router");
const orderRouter = require("./routers/orderRouter")
const userRouter = require("./routers/userRouter")
const restaurantRouter = require("./routers/restaurantRouter")

app.use('/api/restaurants', restaurantRouter.router);
app.use('/api/users', userRouter.router);
app.use('/api/orders', orderRouter.router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));