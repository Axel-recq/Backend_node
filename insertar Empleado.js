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
/* -->*/var sql = "INSERT INTO empleado VALUES (4, '456789', 'Ana', 'López', 'ana@example.com')";

        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 Fila insertada");
        console.log(result);
        });
    // Fin de insertar datos en una Tabla
});