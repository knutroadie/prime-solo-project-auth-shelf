const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let id = [req.params.id, req.user.id];
    let queryText = `DELETE FROM item 
                    WHERE id = $1 AND user_id = $2;`;
    pool.query(queryText, id)
    .then(result=>{
        res.sendStatus(201);
        })
    .catch(error=>{
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


// router.delete('/:id', rejectUnauthenticated, async (req, res) => {
//     const client = await pool.connect();
//     try {
//       const pictureUserID = await client.query(`SELECT "user_id" FROM "item" WHERE "id" = $1;`, [req.params.id])
//       if(req.user.id === pictureUserID.rows[0]['user_id']){
//         await client.query(`BEGIN`)
//         await client.query(`DELETE FROM "item" WHERE "id" = $1;`,[req.params.id])
//         await client.query('COMMIT');
//         res.sendStatus(200);
//       }  
//       res.sendStatus(403);
//     } catch (error) {
//       client.query('ROLLBACK');
//       console.log('error deleting', error)
//       res.sendStatus(500);
//     } finally {
//       client.release();
//     }
//   })