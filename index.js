import express from "express";
import router from "./routes/UserRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors({credentials:true}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(5000, () => console.log("running..."));
