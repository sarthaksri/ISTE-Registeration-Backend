import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import registerRoute from './routes/register.js'

const app = express();
app.use(express.json());

dotenv.config({
    path: './.env',
});
const port = 3000;

app.use('/', registerRoute);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server Running at ${port}`);
    })
}).catch((err) => {
    console.log(`MongoDB Connection Failed!!`, err);
})