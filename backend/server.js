import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

// server
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({error: "not found"})) 

export default app