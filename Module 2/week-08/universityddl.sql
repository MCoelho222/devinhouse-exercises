create schema university

create table if not exists university.alunos(
  mat_alu int primary key,
  nome varchar(200),
  data_entrada date,
  cotista boolean,
);
create table if not exists university.cursos(
  cod_curso int primary key,
  nome_curso varchar(200)
);
create table if not exists university.departamentos(
  cod_dpto int primary key,
  nome_dpto varchar(200)
);
create table if not exists university.matriculas(
  semestre int primary key,
  nota decimal(5,2),
  faltas int,
  status varchar(1)
);
create table if not exists university.disciplinas(
  cod_disc int primary key,
  nome_disc varchar(200),
  carga_horaria int
);
create table university.matrizes_cursos(
  periodo int
);

alter table university.alunos add column fk_cod_curso int;
alter table university.cursos add column fk_cod_dpto int;
alter table university.matriculas add column fk_mat_alu int;
alter table university.matriculas add column fk_cod_disc int;
alter table university.matrizes_cursos add column fk_cod_curso int;
alter table university.matrizes_cursos add column fk_cod_disc int;

alter table university.alunos
add constraint fk_CURSOS_cod_curso foreign key (fk_cod_curso)
references university.cursos (cod_curso);

alter table university.cursos
add constraint fk_DEPARTAMENTOS_cod_dpto foreign key (fk_cod_dpto)
references university.departamentos (cod_dpto);

alter table university.matriculas
add constraint fk_ALUNOS_mat_alu foreign key (fk_mat_alu)
references university.alunos (mat_alu);

alter table university.matriculas
add constraint fk_DISCIPLINAS_cod_disc foreign key (fk_cod_disc)
references university.disciplinas (cod_disc);

alter table university.matrizes_cursos
add constraint fk_DISCIPLINAS_cod_disc foreign key (fk_cod_disc)
references university.disciplinas (cod_disc);

alter table university.matrizes_cursos
add constraint fk_CURSOS_cod_curso foreign key (fk_cod_curso)
references university.cursos (cod_curso);

alter table university.alunos alter column cotista type char(1)