import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// MIDDLEWARES
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())


// ROUTES for Roads
import roadRouter from "./routes/road.routes.js"
app.use("/api/v1/road", roadRouter)


export { app }