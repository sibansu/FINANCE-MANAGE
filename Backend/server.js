const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const {db} = require('./db/db')
const {readdirSync} = require('fs')     


dotenv.config()
const app = express()

const port = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())

//routes

readdirSync('./Routes').map((route)=>app.use('/api/v1', require('./Routes/'+route)))


const server = ()=>{
    db()
    app.listen(port, ()=>{
        console.log("Listening port: ", port)

    })
}

server()