

// Para poder editar, primero conectamos con la base de datos y de dentro del 
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

    var sql = "update producto set nombreproducto ='Atun Bonito' where idproducto='1'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        });
}); 