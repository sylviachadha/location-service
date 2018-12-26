const express = require('express');
const router = express.Router();
const googleMapsClient = require('../services/maps')

router.get('/', function(req, res)  {
    res.render('form', {latLng: null})
});

router.post('/loc', function (req, res) {
    const cityname = req.body.City;
    googleMapsClient.geocode({
        address: cityname
    }, function (err, response) {
        if (!err) {
            const loc = JSON.stringify(response.json.results[0].geometry.location);
            console.log(loc)
            res.render('form', {latLng: loc, city: cityname})
        } else {
            console.log(err)
            res.send("Error - Please try later")
        }
    });
});


router.get('*', function (req, res) {
    res.render('form', {latLng: null})
});


module.exports = router;
