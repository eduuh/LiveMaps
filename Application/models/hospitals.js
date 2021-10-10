const mongoose = require("mongoose")

const PropertiesSchema = mongoose.Schema({
  Facility_N: Number,
  F_NAME: String,
  HMIS: Number,
  Province: String,
  District: String,
  Division: String,
  LOCATION: String,
  Sub_Locati: String,
  Spatial_Re: String,
  Facility_T: Number,
  Agency: String,
  Latitude: Number,
  Longitude: Number,
})
const HospitalSchema = mongoose.Schema({
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

HospitalSchema.index({ geometry: "2dsphere" })

module.exports = mongoose.model("hospitals", HospitalSchema)
