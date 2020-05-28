// const add = (a = 10, b?: number) => a + (b ? b : 0)

const add = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)