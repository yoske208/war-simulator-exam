import express, { Express } from "express";
import "dotenv/config" 
import router from "./src/Routers/UserRouter"
import mongoose from "mongoose";

const app:Express = express()


app.use(express.json())
app.use(router)

mongoose.connect(process.env.MONGO_DB || "")
.then(()=>console.log("connect to db"))
.catch((error) => console.error("error to conect",error)
)

    


app.listen(process.env.PORT || 4000, ()=>{
    console.log(` listen to port http://localhost:${process.env.PORT || 3010} `);
    
})