interface LabelledValue {
  label: string;
}

function printLabel(labeledbj: LabelledValue) {
  console.log(labeledbj.label);
}

let myObj = { size: 10, label: "Size 10 Objects" };

printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let squareOptions = { coluor: "black", width: 100 }; // squareOptions不会经过额外属性检查，所以编译器不会报错。
let mySquare = createSquare(squareOptions); // 类型“{ coluor: string; width: number; }”的参数不能赋给类型“SquareConfig”的参数。
// 对象文字只能指定已知的属性，但“coluor”中不存在类型“SquareConfig”。是否要写入 color?

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 10 };
// p1.x = 2; // 无法分配到x，因为它只是只读属性

let arr1: number[] = [1, 2, 3, 4];

let ro: ReadonlyArray<number> = arr1;

// ro[2] = 12; // 类型“readonly number[]”中的索引签名仅允许读取。
// ro.push(5); // 类型“readonly number[]”上不存在属性“push”。
// ro.length = 100; // 无法分配到 "length" ，因为它是只读属性。
// arr1 = ro; // 类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"。

arr1 = ro as number[];
console.log(arr1);

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
