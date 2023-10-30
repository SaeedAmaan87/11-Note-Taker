require('dotenv').config()
const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = process.env.PORT
//Cors for cross origin issue;

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ["Content-Type"],
    credentials: true
}))
//Alwats keep this on tope of your routes/request
app.use(bodyParser.json())

//Routes 
const noteTakerRoutes = require('./routes/noteTaker.routes')
///Notes
//C - create == POST
//R - read === GET
//U - update ==== PUT
//D - delete === DELETE

app.use('/api/', noteTakerRoutes)


app.listen(PORT, () => {
    console.log(`App is running on`, PORT)
})
