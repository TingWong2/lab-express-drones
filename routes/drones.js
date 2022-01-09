const express = require('express');
const async = require('hbs/lib/async');
const DroneModel = require('../models/Drone.model');
const router = express.Router();
const droneModel = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  droneModel.find()
  .then((dbResponse) => {
    console.log("Database response:", dbResponse);
    res.render("drones/list.hbs", {
      drones: dbResponse,
    });
  })
  .catch((e) => console.error(e));
});


router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', async(req, res, next) => {
  try {
    await droneModel.create(req.body);
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
  //console.log("drone create", req.body)
});

router.get('/drones/:id/edit', (req, res, next) => {
  droneModel
    .findById(req.params.id)
    .then((drone) =>
      res.render("drones/update-form.hbs", { droneToEdit: drone})
    )
    .catch(next);
});


router.post('/drones/:id', async(req, res, next) => {
  console.log("route", req.params.id)
  try {
    await droneModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (err) {
    next (err);
  }
});

router.get('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;
  console.log("voir le id",id);
  DroneModel
    .findByIdAndDelete(id)
    .then((success)=> res.redirect("/drones"))
    .catch(next);
});

module.exports = router;
