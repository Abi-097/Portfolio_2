const { Schema, models, model } = require("mongoose");

const AboutSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description2: String,
  github: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
});

const AboutModel = models.About || model("About", AboutSchema);

export default AboutModel;
