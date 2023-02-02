const express = require("express")
require("dotenv").config()
const port = process.env.PORT
const mongoose = require("mongoose")
const defiRoutes = require("./routes/defiRoutes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/defi/v1", defiRoutes)

mongoose.set("strictQuery", false)

try {
    mongoose.connect(process.env.MONGOURI, () => {
        console.log("Connected to MongoDB...")
        app.listen(port, () => {
            console.log("Connected to App!")
        })
    })
} catch (e) {
    console.log(e)
}
