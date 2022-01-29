const connectToMongo = require('./db');
const express = require('express')
// const cors = require('cors')
connectToMongo();

const app = express()
const port = 5000
// app.use(cors())
app.use(express.json())
app.use('/bugs',require('./routes/bugs'));
app.use('/admin',require('./routes/admin'));

app.listen(port, () => {
  console.log(`Bug Tracker listening at http://localhost:${port}`)
})