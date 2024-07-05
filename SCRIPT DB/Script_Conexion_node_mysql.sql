/*primero intente con la primera contraseña*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'current password';

/*luego le agregue mi contraseña*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

select * from springdb.empleado;
