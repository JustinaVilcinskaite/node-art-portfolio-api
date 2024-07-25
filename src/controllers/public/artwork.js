import ArtworkModel from "../../models/artwork.js"

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


const GET_ALL_ARTWORKS_BY_CREATOR = async (req, res) => {
  try {
    const creatorId = req.params.creatorId;
    
    const artworks = await ArtworkModel.find({ creatorId: creatorId });

    if (!artworks.length) {
      return res.status(404).json({ message: `No artworks found for creator with id ${creatorId}` });
    }

    return res.status(200).json({ artworks: artworks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in application" });
  }
  };

export { GET_ALL_ARTWORKS_BY_CREATOR, GET_ARTWORK_BY_ID };