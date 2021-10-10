"use strict"
var express = require("express")
var router = express.Router()
const assert = require("assert")
const Hospital = require("../models/hospitals")
const School = require("../models/school")

const points = {
  type: "FeatureCollection",
  name: "schooltest",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
  },
  features: [],
}

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
    const pointsresponse = await Hospital.find(filter)
    const hospitals = { ...points, features: pointsresponse }
    res.json(hospitals)
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
    const schoolpoints = await School.find(filter)
    const schools = { ...points, features: schoolpoints }
    res.json(schools)
  } catch (err) {
    console.log(err)
    res.json("something went wrong")
  }
})
module.exports = router
