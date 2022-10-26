import express from "express";
const cookieParser = require('cookie-parser');

const cors = require('./cors.js')
const controllers = require('./controllers.js')

const port = 8080

const app = express();

app.use(cookieParser())

app.use(cors())
app.use(express.json())

app.use('/api', controllers)

app.listen(port, () => console.log(`Listening on port ${port}`));
