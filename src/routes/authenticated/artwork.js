import express from "express";

import { 
    ADD_ARTWORK, 
    GET_ARTWORKS, 
    GET_ARTWORK_BY_ID, 
    UPDATE_ARTWORK_BY_ID, 
    DELETE_ARTWORK_BY_ID,
} from "../../controllers/authenticated/artwork.js";

import authCreator from "../../middlewares/auth.js";

const router = express.Router();


router.post('/artworks', authCreator, ADD_ARTWORK);
router.get('/artworks', authCreator, GET_ARTWORKS);
// router.get('/artworks/creators/:creatorId', authCreator, GET_CEATOR_ARTWORKS);
router.get('/artworks/:id', authCreator, GET_ARTWORK_BY_ID);
router.put('/artworks/:id', authCreator, UPDATE_ARTWORK_BY_ID);
router.delete('/artworks/:id', authCreator, DELETE_ARTWORK_BY_ID);

export default router;