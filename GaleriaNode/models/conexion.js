var mysql = require('mysql');
port = process.env.PORT || 4205;
 
//if (port === 4205) {
    var connection = mysql.createConnection({
        host: 'den1.mysql1.gear.host',
        //port: 3306,
        user: 'galeria',
        password: 'Ml0e!~74JX3C',
        database: 'galeria',
        insecureAuth: true
    });
//} else {console.log("No hay conexión");}
 
connection.connect();
 
module.exports = connection;