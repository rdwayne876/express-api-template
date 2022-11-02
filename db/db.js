require( 'dotenv').config()
const mongoose = require( 'mongoose')

// Function to start db connection
const database = () => {
    // required connection params
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    try {
        //Connect to collection on mongodb atlas
        mongoose.connect( process.env.CONN_URI, connectionParams)
        console.log( "DB Connection successful");

    } catch (err) {
        console.error( err)
    }
}

module.exports = database