const mongoose = require("mongoose")

const PropertiesSchema = mongoose.Schema({
  OBJECTID: Number,
  CODE: Number,
  SCHOOL_NAM: String,
  LEVEL: String,
  Status: String,
  County: String,
  DISTRICT: String,
  ZONE: String,
  SUB_COUNTY: String,
  Ward: String,
  X_Coord: Number,
  Y_Coord: Number,
  Source: String,
})
const SchoolSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },

  properties: PropertiesSchema,
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: [Number],
  },
})

SchoolSchema.index({ geometry: "2dsphere" })

module.exports = mongoose.model("schools", SchoolSchema)
