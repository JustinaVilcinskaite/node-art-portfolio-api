import express from "express";

import { 
    SIGN_UP, 
    LOGIN, 
    GET_CREATOR_ACCOUNT_BY_ID, 
    DELETE_CREATOR_ACCOUNT_BY_ID,
    GET_ALL_CREATORS
} from "../controllers/creator.js";

import authCreator from "../middlewares/auth.js";

const router = express.Router();


router.post('/signup', SIGN_UP);
router.post('/login', LOGIN);
router.get('/creators/:id', authCreator, GET_CREATOR_ACCOUNT_BY_ID);
// router.put('/creators/:id', UPDATE_CREATOR_ACCOUNT_BY_ID);
router.delete('/creators/:id', authCreator, DELETE_CREATOR_ACCOUNT_BY_ID);

// Public route
router.get('/public/creators', GET_ALL_CREATORS);


export default router;


