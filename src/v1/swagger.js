const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
//API meta info
const options = {
    definition: {
        openapi: "3.0.0",
        info: { 
            title: "API v1", 
            description: "Boiler plate API template",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1"
            }
        ]
    },
    apis: [ ]
}

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

//Serve swagger docs function
const swaggerDocs = ( app, port) => {
    // route to docs
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get( "/api/v1/docs.json", ( req, res) => {
        res.setHeader( "Content-Type", "application/json")
        res.send( swaggerSpec)
    })

    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
}

module.exports = { swaggerDocs}