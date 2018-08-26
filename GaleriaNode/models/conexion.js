var mysql = require('mysql');
port = process.env.PORT || 4205;
 
if (port === 4205) {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'galeria',
        insecureAuth: true
    });
} else {console.log("No hay conexión");}
 
connection.connect();
 
module.exports = connection;