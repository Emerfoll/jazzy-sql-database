const express = require('express');
const router = express.Router();
const pool = require('../modules/pools.js')


router.get('/', (req, res) => {
    // res.send(musicLibrary);
    // Send back everything in songs table.
    const queryText = `SELECT * FROM "song" ORDER BY "title";`;
    pool.query(queryText)
    .then((result) => {
        console.log(result);

        //result is huge, only care about rows
        res.send(result.rows);
    }).catch((error) => {
        console.log(error); 
        res.sendStatus(500);
    });

});

router.post('/', (req, res) => {
    // musicLibrary.push(req.body);
    console.log(req.body);
    // Send body data to database.
    const queryText = `INSERT INTO "Songs" ("rank", "track", "artist", "published")
    VALUES ( $1, $2, $3, $4);`;

    pool.query(queryText, [req.body.rank, 
                           req.body.track, 
                           req.body.artist, 
                           req.body.published
                        ])
        .then((result) => {
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