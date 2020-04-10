const express = require('express')

const app = express()

app.use(express.json())


//put app.listen in massive
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}!`))