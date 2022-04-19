// calcula a soma dos números passados como argumentos
export function soma(a, ...nums) {
    let arg = Number(a);
    let result = arg + nums.reduce((acc, item) => acc + item, 0);
    return result;
}

