const mongoose = require('mongoose')

const db = async()=>{
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.mongo_uri)
        if(conn){
            console.log("connected to mongodb")
        }
    } catch (error) {
        console.log("Some error occured: ", error)
    }
}

module.exports = {db}