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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Foods.findById(id)
        .then(food => {
            if (food) {
                res.status(200).json(food)
            } else {
                res.status(404).json({
                    message: "Could not find a food with that ID"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error finding food"
            });
        })
})

router.post('/', (req, res) => {
    Foods.add(req.body)
        .then(food => {
            res.status(201).json(food)
        })
        .catch(error => {
            res.status(500).json({
                message: "Error adding food"
            });
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Foods.remove(id)
        .then(food => {
            if (food) {
                res.status(200).json({
                    message: "Food successfully deleted"
                });
            } else {
                res.status(404).json({
                    message: "Could not find a food with that ID"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error deleting food"
            });
        })
})

module.exports = router;