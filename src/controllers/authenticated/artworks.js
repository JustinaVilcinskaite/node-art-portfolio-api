import { v4 as uuidv4 } from 'uuid';
import ArtworkModel from "../../models/artwork.js"


const ADD_ARTWORK = async (req, res) => {
  try {
    const artwork = new ArtworkModel({
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      medium: req.body.medium,
      creationDate: req.body.creationDate,
      imageUrls: req.body.imageUrls,
      creatorId: req.body.creatorId,
    });

    await artwork.save();

    return res.status(201).json({ message: "Artwork has been added", artwork: artwork });
} catch (error) {
  console.log(error);
  return res.status(500).json({ message: "Error in application" });
}
};


const GET_ARTWORKS = async (req, res) => {
  try {
    const artworks = await ArtworkModel.find();

    return res.status(200).json({ artworks: artworks });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in application" });
  }

};

const GET_ARTWORK_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;

    const artwork = await ArtworkModel.findOne({ id: id });

    if (!artwork) {
        return res.status(404).json({ message: `Artwork with id ${id} does not exist`});
    }

    return res.status(200).json({ artwork: artwork });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in application" });
  }

};

const UPDATE_ARTWORK_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;
  
    const artwork = await ArtworkModel.findOneAndUpdate({ id: id }, {...req.body }, { new: true });
    
    return res.status(200).json({ message: "Artwork has been updated successfully", artwork: artwork });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in application" });
  }
};

const DELETE_ARTWORK_BY_ID = async (req, res) => {
  try {
    const id = req.params.id;
  
    const artwork = await ArtworkModel.findOneAndDelete({ id: id });
  
    if(!artwork) {
      return res.status(404).json({ message:`Artwork with id ${id} does not exist` });
    }
  
    return res.status(200).json({ message: "Artwork has been deleted", artwork: artwork });
  } catch (error) {
    console.log(error);
    return req.status(500).json({ message: "Error in application" });
  }
};


export { ADD_ARTWORK, GET_ARTWORKS, GET_ARTWORK_BY_ID, UPDATE_ARTWORK_BY_ID, DELETE_ARTWORK_BY_ID };