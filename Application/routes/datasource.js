"use strict"
var express = require("express")
var router = express.Router()
const assert = require("assert")
const Hospital = require("../models/hospitals")
const School = require("../models/school")
/* G/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

router.get("/hospitals", async (req, res) => {
  const { distance, latitude, longitude } = req.query
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

router.get("/schools", async (req, res) => {
  const { distance, latitude, longitude } = req.query
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
    const posts = await School.find(filter)
    res.json(posts)
  } catch (err) {
    console.log(err)
    res.json("something went wrong")
  }
})
module.exports = router
