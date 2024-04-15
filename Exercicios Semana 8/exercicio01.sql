--EXERCICIO 01 - TABELA DEPARTAMENTO

create table Departamento (
	id serial primary key,
	nome varchar(200) not null,
	dataCriacao date not null
);

-- EXERCICIO 02 - TABELA FUNCIONARIOS

create table Funcionarios(
	id serial primary key,
	nome varchar (200) not null,
	idade int not null,
	cargo varchar(200) not null,
	salario decimal not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references Departamento (id)
);

select * from Departamento;
select * from Funcionarios;

--EXERCICIO 03 - INSERINDO VALORES NA TABELA DEPARTAMENTO

insert into Departamento (nome, dataCriacao)
values ('Comercial', '2024-01-01');

insert into Departamento (nome, dataCriacao)
values ('Recursos Humanos', '2024-01-01');

insert into Departamento (nome, dataCriacao)
values ('Logística', '2024-01-01');

--EXERCICIO 04 - INSERINDO VALORES NA TABELA FUNCIONARIOS

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Diego Campos', 39, 'Diretor de Recursos Humanos', 50000, 2);

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Arthas Menethil', 21, 'Executivo de vendas', 3000, 1);

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Anduin Wrynn', 18, 'Coordenador de Comércio Exterior', 25000, 3);

--EXERCICIO 05 - CRIANDO UM JOIN ENTRE FUNCIONARIOS E DEPARTAMENTO

select 
F.nome as nome_funcionario,
F.idade,
F.cargo,
F.salario,
D.nome as Área
from Funcionarios as F
inner join Departamento as D
on F.idDepartamento = D.id


