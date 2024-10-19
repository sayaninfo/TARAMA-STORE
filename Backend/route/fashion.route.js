import express from 'express';
import{getfashion} from"../controller/fashion.controller.js";

const router = express.Router();
router.get("/",getfashion);

export default router;