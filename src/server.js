import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

console.log(process.cwd());

const app = express();
const logger = morgan("dev");

app.set("view engine","pug");
app.set("views",process.cwd()+"/src/views");
app.use(logger);
app.use("/",globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Listening!✅`));
