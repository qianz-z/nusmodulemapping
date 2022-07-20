const express = require("express");
const router = express.Router();
const Module = require("../models/moduleModel");

router.route("/modules").get((req, res) => {
    Module.find().then(foundModules => res.json(foundModules))
});

router.route("/profonly").post((req, res) => {
    const name = req.body.name;
    const code = req.body.code;
    const mc = req.body.mc;
    const prereq = req.body.prereq;
    const preclusions = req.body.module_preclu;
    const details = req.body.details;

    const newModule = new Module({
        name,
        code,
        mc,
        prereq,
        preclusions,
        details
    });

    // Module.aggregate([
    //     { $prereq: { split_name: { $split: [ "$prereq", " " ] } } },
    //   ])

    newModule.save();
});

module.exports = router;