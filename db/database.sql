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

--@block 
DESCRIBE empleado

--@block
use empresadb;

insert into empleado (nombre, salario) values (
    (1, 'Joe', 1000),
    (2, 'Henry', 2000),
    (3, 'Sam', 2500),
    (4, 'Max', 1500)
);
