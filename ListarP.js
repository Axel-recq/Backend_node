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
        var sql = "SELECT * FROM producto";
        con.query(sql, function (err, result) {
        if (err) throw err;
         console.log(result);
        });
}); 