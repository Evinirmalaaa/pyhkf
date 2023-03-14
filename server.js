const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require('path');
const fs = require('fs');
const multer = require("multer");
const soalRouter = require('./router/soal')
const categoryRouter = require('./router/category')
const jobsheetRouter = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
const quiz = require('./models/soal');
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.use('/api/images', express.static('images'));
app.use('/api/soal', soalRouter)
app.use('/api/jobsheet', jobsheetRouter)
app.use('/api/category', categoryRouter)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`))