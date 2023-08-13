import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import { middlewareRateLimit } from "../middleware/limit.js";

const initApiRoutes = () => {
    const router = Router();
    router.use("/get", middlewareRateLimit, getInitRoute())
    router.use("/post", middlewareRateLimit, postInitRoute())
    router.use("/put", middlewareRateLimit, putInitRoute())
    return router
}

export default initApiRoutes