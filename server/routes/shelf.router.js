const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "item";`
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows)
        }).catch((error) => {
            res.sendStatus(500)
        })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('in shelf router post', req.body, req.user);
    let queryText = `
                    INSERT INTO "item" ("description, "image_url", "user_id")
                    VALUES ($1, $2, $3)     
    `
    pool.query(queryText, [req.body.description, req.body.url, req.user.id])
        .then((response) => {
            res.sendStatus(200)
        }).catch((error) => {
            res.sendStatus(500)
        })
});

/**
 * Delete an item if it's something the logged in user added
 */

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('help!!', req.params.id);
    let id = req.params.id;
    let queryText = `DELETE FROM "item" 
                    WHERE "id" = $1`;
    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('ERROR IN / DELETE', error);
            res.sendStatus(500);
        });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});

/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;