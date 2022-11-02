const database = require('../db/db')
require( 'dotenv').config()

const { swaggerDocs: V1SwaggerDocs} = require( './v1/swagger')
app = require('./index')

//Run DB connection
database()

//Run app server
const server = app.listen( process.env.PORT, "0.0.0.0", () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
    V1SwaggerDocs( app, process.env.PORT)
})