// função recebe arrays e concatena
export function concatena(a, ...arrs) {
    let result = [...a];
    arrs.forEach(item => {
        let arr = item;
        result = [...result,...arr];
    })
    return result;
};