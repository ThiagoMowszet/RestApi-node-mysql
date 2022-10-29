--@block 
CREATE TABLE IF NOT EXISTS empresadb;


--@block 
use empresadb;
 
CREATE TABLE empleado (
    id INT(11) NOT NULL AUTO_INCREMENT, 
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (ID)
);

