const mysql = require('mysql');


let mySqlClient = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

mySqlClient.connect();

let selectQuery = 'SELECT * FROM items';

mySqlClient.query(
    selectQuery,
    function select(error, results, fields) {
        if (error) {
            console.log(error);
            mySqlClient.end();
            return;
        }

        if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                let firstResult = results[i];

                console.log(firstResult['id'] + " " + firstResult['content']);
            }
        } else {
            console.log("Pas de données");
        }
        mySqlClient.end();
    }
);