function add(x: number, y: number): number {
  return x + y;
}

//完整函数类型
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 推断类型 ，按上下文归类，是类型推论的一种，
let myAdd1: (baseValue: number, increment: number) => number = function (
  x,
  y
): number {
  return x + y;
};

function buildName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

// let result1 = buildName("Bog"); // 应有 2 个参数，但获得 1 个。
// let result2 = buildName("Bog", "eric", "John"); // 应有 2 个参数，但获得 3 个。
let result3 = buildName("Bog", "eric");

function buildName1(firstName: string, lastName?: string): string {
  // 普通可选参数必须跟在必须参数后面
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

function buildName2(lastName = "Smith", firstName: string): string {
  // 带默认初始化值的参数都是可选的，但是不需要放在必须参数的, 如果要把Smith展示出来必须要传入明确的undefined buildName2(undefined, "eric");
  //
  return firstName + " " + lastName;
}

let result4 = buildName1("Bog"); // Bog
let result5 = buildName1("Bog", undefined); // Bog
// let result7 = buildName("Bog", "eric", "John"); // 应有 2 个参数，但获得 3 个。
let result6 = buildName1("Bog", "eric");

// 剩余参数

function buildName3(firstName: string, ...restOfNames: string[]): string {
  return firstName + " " + restOfNames.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName3;
