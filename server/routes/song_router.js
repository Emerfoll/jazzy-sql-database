const express = require('express');
const router = express.Router();
const pool = require('../modules/pools.js')

// Handles ajax get requests for the server.
router.get('/', (req, res) => {
    // Starts a new query in the database and waits for the results to be sent to the client.
    pool.query(`SELECT * FROM "song" ORDER BY "title";`).then((result) => {
        console.log(result);
        // Sends the information the client requested to the client.
        res.send(result.rows);
    }).catch((error) => { // Sends a message to the client if the database returns an error.
        console.log(error);
        res.sendStatus(500);
    });
});// End of the ajax get handler.

// Handles ajax post requests for the server.
router.post('/', (req, res) => {
    console.log(req.body);
    // Cleans and sends info to the database to be inserted into the 'artist' table.
    const queryText = `INSERT INTO "song" ("title", "length", "released")
    VALUES ( $1, $2, $3);`;
    // Info form the client to be sent and added to the database.
    pool.query(queryText, [
        req.body.title,
        req.body.length,
        req.body.released
    ]).then((result) => {
        console.log(result);
        //result is simple yes or no.
        res.sendStatus(201);
    }).catch((error) => {
        // response for if things go wrong with database.
        console.log(error);
        res.sendStatus(500);
    });

});

module.exports = router;