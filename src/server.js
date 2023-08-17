require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app')

const port = process.env.SERVER_PORT

const database = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.owrhdrc.mongodb.net/venice`

const main = async() => {
    try{
        await mongoose.connect(database);
        console.log("Database connected successfully");

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch(err) {
        console.log("Database connection fail", err);
    }
}

main();