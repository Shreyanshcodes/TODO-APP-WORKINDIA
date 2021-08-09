const express = require('express')
const app = express()
const port = 5000
const connectDB = require("./config/dataBase");
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})