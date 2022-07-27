select count(m.fk_mat_alu) as total_por_curso, mc.fk_cod_curso from university.matriculas m
inner join university.matrizes_cursos mc using(fk_cod_disc)
group by mc.fk_cod_curso
order by mc.fk_cod_curso desc;

select count(1) as total_reprov_cotistas from university.alunos a
inner join university.matriculas m
on a.mat_alu = m.fk_mat_alu
where m.status = 'R' and a.cotista = 'S'