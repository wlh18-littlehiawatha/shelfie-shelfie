// imports
require('dotenv').config();


const express = require("express")
const massive = require("massive")

// Controller File
const cc = require('./controllers/controller')

// .ENV VARIABLES

const {SERVER_PORT,CONNECTION_STRING} = process.env
// const SERVER_PORT = 7777

// Setup App
const app = express()

// TLM
app.use(express.json())

// PORT = 


//Database Connection
massive({
   connectionString: CONNECTION_STRING,
   ssl: {
      rejectUnauthorized: false,
   },
}).then((dbInstance) => {
   app.set('db', dbInstance);
   console.log('Database Connected!')
   app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}!`))
})
.catch(error => console.log(error, `Error in Massive Database Connection`));





// EndPoints
app.post('/api/product', cc.createProduct)
app.get('/api/product', cc.getProduct)
app.put('/api/product/:product_id', cc.updateProduct )
app.delete('/api/product/:product_id', cc.deleteProduct )