import express from "express";
import router from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
import DBConnection from "./db/db.js";
dotenv.config();

const app = express();

//
app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 5000;

DBConnection();

app.listen(PORT, () => console.log("Server on " + PORT));
