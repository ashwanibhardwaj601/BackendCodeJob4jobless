
const Linkschema = require("../model/cloudinary")
const cloudinary = require("cloudinary");
const cloudinaryset = async (req, res) => {

    try {
        const { email, url } = req.body;
        if (!email || !url) {
            return res.send(error(400, "All fields are required"));
          }
      
          const olduser = await Linkschema.findOne({ email: email });
          if (olduser) {
            return res.status(400).send("already had resume");
          }
          
        const cloudImg = await cloudinary.uploader.upload(url, {
            folder: "ProfileImage",
        });
        const cloud = await Linkschema.create({
            image: {
                publicId: cloudImg.publicId,
                url: cloudImg.secure_url,
            },
        });


        return res.status(200).send({ cloud });
    } catch (error) {
        return res.status(200).send("Error: " + error.message)
    }
}

module.exports = { cloudinaryset };