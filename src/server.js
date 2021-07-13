import "./db";
import "./models/Video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

console.log(process.cwd());

const app = express();
const logger = morgan("dev");

app.set("view engine","pug");
app.set("views",process.cwd()/*작업 디렉토리 절대경로*/+"/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/",globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

export default app;
