const express = require('express');
const cors = require('cors');
const router = require('./routes/routers')

const app = express();
const PORT = 3003;
app.use(cors());
app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Runnin on: http://localhost:${PORT}`)
})