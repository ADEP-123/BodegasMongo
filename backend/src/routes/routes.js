import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";

const initApiRoutes = () => {
    const router = Router();
    router.use("/get", getInitRoute())
    router.use("/post", postInitRoute())
    router.use("/put", putInitRoute())
    return router
}

export default initApiRoutes