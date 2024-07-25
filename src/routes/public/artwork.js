import express from "express";

import { 
    GET_ARTWORK_BY_ID, 
    GET_ALL_ARTWORKS_BY_CREATOR
} from "../../controllers/public/artwork.js";


const router = express.Router();

router.get('/public/artworks/creator/:creatorId', GET_ALL_ARTWORKS_BY_CREATOR);
router.get('/public/artworks/:id', GET_ARTWORK_BY_ID);

export default router;