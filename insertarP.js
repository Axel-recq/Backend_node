var mysql = require('mysql');
var con=mysql.createConnection({
host: "localhost",
user:"root",
password: "1234",
database:"springdb"

});
con.connect(function(err){

    if (err) throw err;
    console.log("Conexion exitosa");

    // insertar datos en una Tabla
/* -->*/var sql = "INSERT INTO producto VALUES (7,'Gafas de sol', 'accesorios', 20.00, 35)";

        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 Fila insertada");
        console.log(result);
        });
    // Fin de insertar datos en una Tabla
});