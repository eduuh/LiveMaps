"use strict"
var express = require("express")
var router = express.Router()
const assert = require("assert")
const Hospital = require("../models/hospitals")
/* G/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

router.get("/", async (req, res) => {
  const { distance, latitude, longitude } = req.query
  console.log(distance, latitude, longitude)
  try {
    let filter = {}
    if (distance && latitude && longitude) {
      filter = {
        geometry: {
          $near: {
            $maxDistance: distance,
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
          },
        },
      }
    }
    const posts = await Hospital.find(filter)
    res.json(posts)
  } catch (err) {
    console.log(err)
    res.json("something went wrong")
  }
})

module.exports = router
