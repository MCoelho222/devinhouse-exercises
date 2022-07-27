select sum(fk_cod_curso) as TOTAL, cotista from university.alunos
group by cotista
having sum(fk_cod_curso) > 15;