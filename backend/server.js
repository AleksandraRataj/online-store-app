import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();

//middlewear to parsing json data in the body of request
app.use(express.json());

app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/plantsforyou', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

app.get('/', ((req, res) => {
    res.send('Server is ready');
}));

//fetching static data from data.js file
// app.get('/api/products', ((req, res) => {
//     res.send(data.products);
// }));
//
// app.get('/api/products/:id', (req, res) => {
//
//     const productID = req.params.id;
//     const product = data.products.find(x => x._id === productID);
//
//     if(product){
//         res.send(product);
//     } else {
//         res.status(404).send({message: 'Nie odnalezniono produktu!'});
//     }
//
// });

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

//middleware - error catcher
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});
