let isDone: boolean = false;

let decLiteral: number = 6;

let names: string = "eric";

let arr1: number[] = [1, 2, 3];

let arr2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 1];
// x = [10, "hello"]; // error

console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// x[3] = 'world';
// console.log(x[5].toString()); // OK

// x[6] = true; // Error, 布尔不是(string | number)类型

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c); // 默认从0开始为元素编号 ，也可以手动赋值

a++;
let a;
let a;