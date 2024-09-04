import express from 'express';
import {sighup, login} from "../controller/user.controller.js";
const router = express.Router()

router.post("/sighup", sighup);
router.post("/login",login );

export default router;