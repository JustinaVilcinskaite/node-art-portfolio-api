import express from "express";

import { 
    ADD_ARTWORK, 
    GET_ALL_ARTWORKS_BY_CREATOR, 
    GET_ARTWORK_BY_ID, 
    UPDATE_ARTWORK_BY_ID, 
    DELETE_ARTWORK_BY_ID,
} from "../controllers/artworks.js";

import authCreator from "../middlewares/auth.js";

const router = express.Router();


router.post('/artworks', authCreator, ADD_ARTWORK);
router.get('/artworks/creators/:creatorId', authCreator, GET_ALL_ARTWORKS_BY_CREATOR);
router.get('/artworks/:id', authCreator, GET_ARTWORK_BY_ID);
router.put('/artworks/:id', authCreator, UPDATE_ARTWORK_BY_ID);
router.delete('/artworks/:id', authCreator, DELETE_ARTWORK_BY_ID);

// Public routes
router.get('/public/artworks/creators/:creatorId', GET_ALL_ARTWORKS_BY_CREATOR);
router.get('/public/artworks/:id', GET_ARTWORK_BY_ID);

export default router;







