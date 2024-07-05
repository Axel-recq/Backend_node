// PRIMERO INSTALAMOS EL CONECTOR DE NODE CON LA BASE DE DATOS, ABRIMOS TERMINAL Y EJECUTAMOS EL SIG CODIGO--> npm i mysql

var mysql = require('mysql');
var con=mysql.createConnection({
host: "Localhost",
user:"root",
password: "1234",
database:"springdb"

});
con.connect(function(err){

    if (err) throw err;
    console.log("Conexion exitosa");

}); 

//Abro terminal en el visual y ejecuto--> node Conectar.js 


//SI SALE EL SIGUIENTE ERROR DE AUTENTICACION
/*  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
errno: 1251,
sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading My
sqlState: '08004',
fatal: true
}*/

//Abro script en el sql y ejecuto ---> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'current password';

