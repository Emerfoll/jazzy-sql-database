const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// tells the server to rout to song_router for the /song ajax requests.
let songRouter = require('./routes/song_router.js')
app.use('/song', songRouter);

// tells the server to rout to artist_router for the /artist ajax requests.
let artistRouter = require('./routes/artist_router.js')
app.use('/artist', artistRouter);


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});



