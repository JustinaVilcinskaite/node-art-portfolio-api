import express from "express";

import { 
    GET_ALL_CREATORS
} from "../../controllers/public/creator.js";

const router = express.Router();

router.get('/public/creators', GET_ALL_CREATORS);

export default router;