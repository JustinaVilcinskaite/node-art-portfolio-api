import express from "express";
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from "cors";

import publicArtworkRouter from "./src/routes/public/artwork.js";
import publicCreatorRouter from "./src/routes/public/creator.js";
import authenticatedArtworkRouter from "./src/routes/authenticated/artwork.js";
import authenticatedCreatorRouter from "./src/routes/authenticated/creator.js";


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION)
  .then(() => console.log('Connected to DB successfully'))
  .catch((error) => {
    console.log(error);
  });

app.use(publicArtworkRouter);
app.use(publicCreatorRouter);
app.use(authenticatedArtworkRouter);
app.use(authenticatedCreatorRouter);


app.use((req, res) => {
    return res.status(404).send({ message: "Sorry, endpoint does not exist" });
  });

app.listen(process.env.PORT, () => {
    console.log(`Your application is launched successfully on port ${process.env.PORT}`);
});
