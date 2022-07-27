select * from university.alunos
where cotista='S';

select * from university.cursos
where fk_cod_dpto=1;

select avg(fk_cod_curso) from university.alunos;
select count(1) from university.alunos;