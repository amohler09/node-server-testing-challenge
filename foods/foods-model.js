const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db('foods');
}

function findById(id) {
    return db('foods')
        .where({
            id
        })
        .first();
}

function add(food) {
    return db('foods')
        .insert(food)
        .then(id => {
            return findById(id[0]);
        })
}

function remove(id) {
    return db('foods')
        .where({
            id
        })
        .del();
}