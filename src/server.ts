import express from "express";
import router from "./router";
const app = express();

// leeer datos de formularios
app.use(express.json());

app.use("/", router);

export default app;
