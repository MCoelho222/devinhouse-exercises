update university.alunos
set cotista = 'S'
where mat_alu = 107970;

update university.matriculas
set nota = 7
where nota = 3;

update university.matriculas
set status = 'A'
where nota >= 7;