const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayQuadrados = arrayNumeros.map(item => item**2);
let majors = arrayQuadrados.filter(item => item > 30);
console.log(majors);
console.log(arrayQuadrados);


