const express = require('express')

const app = express()

/**
 * App Routes.
 */
app.get("/", (req, res, next) => {
    res.status(200).json({status: true, message: "Hello World!"})
})

const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server listening on ${host}:${port}`)
})