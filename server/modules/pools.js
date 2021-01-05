const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'jazzy_sql',
    host: 'localhost',
    port: 5432
});

// helper comments
pool.on('connect', () => {
    console.log('PG connected'); 
});
pool.on('error', (error) => {
    console.log(error); 
}); // end of helper comments

module.exports = pool;