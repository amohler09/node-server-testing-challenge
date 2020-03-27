const Foods = require('./foods-model');

const router = require('express').Router();

router.get('/', (req, res) => {
    Foods.find()
        .then(foods => {
            if (foods.length > 0) {
                res.status(200).json(foods)
            } else {
                res.status(404).json({
                    message: "Could not find any food"
                });
            }

        })
        .catch(error => {
            res.status(500).json({
                message: "Error finding foods"
            })
        })
})

module.exports = router;