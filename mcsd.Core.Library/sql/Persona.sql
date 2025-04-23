CREATE TABLE Persona
(
   ID_column INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
   [NombreCompleto]  nvarchar(128)     not null, 
   [ProfesionOficio] nvarchar(256)     not null 
);

alter table persona add Ciudad varchar(25);


insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Pablo Alejandro Pérez Acosta','Técnico Sistemas','USA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Hernán Gutiérrez Bernal','Instructor Canino','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Leonardo Salazar García','Odontólogo','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('María Victoria Gil Daza','Zootecnista','MADRID');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Javier Mauricio Villalobos','Topografía','PANAMA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Martha Lucía Caicedo Barahona','Gastrónoma','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Fernando A. Pardo','Abogado','BELGICA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Nelson Dueñas','Ingeniero de Sistemas','USA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Libardo Orduña Amado','Publicísta','VILLAVICENCIO');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Ariel Herrera Higuera','Ingeniero Mecánico','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Mario Enrique Rubiano Monroy','Ingeniero Civil','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Liliana Alexandra Gómez Gelves','Diseño de Modas','BARRANQUILLA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Miguel José Pérez González','Ingeniero Mecánico','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Javier Posada Sandoval','Psicólogo','SOACHA');
}
insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Ana María Puerto Rojas','Analísta Contable','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Roberto Alejandro Blanco Pulido','Ingeniero de Alimentos','BARRANQUILLA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Glenda Amaya','Ingeniera de Sistemaas','COTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Carlos Francisco Reina','Médico Veterinario','CALI');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Christian Bohorquez','Analísta de Sistemas','USA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Diego Alejandro Gaitán Rico','Ing de Sistemas','BOGOTA');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Alex Fernando Miranda Urrego','Comerciante','CALI');

insert into Persona ([NombreCompleto],[ProfesionOficio],[Ciudad])
values ('Henry Casadiego','Ingeniero de Petróleos','BARRANQUILLA');

