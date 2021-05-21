# TypeScript

## 一、typescript介绍

### 1、为什么要学习TypeScript

1. 为大型系统而生：TypeScript是静态类型化的JavaScript超集。
2. 招聘市场需求陡增：必备或者加分项。
3. Vue3.0帆布在即。Angular、React、Vue都支持typescript

### 2、TS开发者的四个层级

1. 业务使用者：这个层级的开发者可以在业务代码中熟练使用typescript编码，但是无法进行类型编程，也无法写出一些底层库，仅仅停留在使用阶段。
2. 类型编程者：这个类型的开发者，可以对类型进行编程，可以开发出一些实用的工具类型，对于难以定义的类型也能驾轻就熟。
3. TS定制者：这个层级的开发者对typescript的类型系统比较熟悉，对typescript的语言设计也有一定的认知，可以开发TypeScript Transformer Plugin来定制化开发typescript。
4. TS设计者：这个层面的开发者可以参与到typescript这门语言的设计中去，基本上能达到PL领域的从业人员的水准。

### 3、Typescript的原始类型

typescript的原始类型包括：boolean、number、string、void、undefined、null、symbol、bigint。

#### 3-1、布尔类型

我们使用boolean来表示布尔类型，开头是小写的，如果你在typescript文件中写成Booleanname代表是JavaScript中的布尔对象，这是新手常见的错误、
    
    const isLoading: boolean = false

| Tips:很多typescript的原始类型比如boolean、number、string等等，在JavaScript中都有类似的关键字Boolean、Number、String，后者是JavaScript的构造函数，比如我们用Number用于数字类型转化或者构造Number对象用的，而TypeScript中的number类型仅仅是表示类型，两者完全不同。

#### 3-2、数字

JavaScript中的二进制、十进制、十六进制等数都可以用number类型表示。

    const decLiteral: number = 6
    const hexLiteral: number = 0xf00d
    const binaryLiteral: number = 0b1010
    const octalLiteral: number = 0o744

#### 3-3、字符串

    const book: string = "深入浅出 TypeScript"

#### 3-4、空值

表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值类型是void:

    function warnUser(): void {
        alert("This is my warning message");
    }

实际上只有null和undefined可以赋给void;

#### 3-5、Null和Undefined

typescript里，undefined和null两者各自有自己的类型分别叫做undefined和null,和void相似，他们的本身的类型用处不是很大：

    let a: undefined = undefined;
    let b: null = null;

默认情况下null和undefined是所有类型的子类型，就是说你可以把null和undefinded赋值给number类型的变量。

但是在正式项目中一般都是开启 --strictNullChecks检测的，即null和undefined只能赋值给any和它们各自（一个例外是undefined是也可以分配给void），可以规避非常多的问题。

#### 3-6、Symbol

我们在使用Symbol的时候，必须添加在es6的编译辅助库,

    "lib": ["es6", "dom"]

Symbol是在ES2015之后成为新的原始类型，它通过Symbol构造函数创建：

    const sym1 = Symbol('key1');
    const sym2 = Symbol('key2');

而且Symbol的值是唯一不变的：

    Symbol('key1') === Symbol('key2') // false

#### 3-7、BigInt --> 大数整数类型

BigInt类型在TypeScript3.2版本被内置。使用BigInt可以安全的存储和操作大整数，即使这个数已经超出了JavaScript构造函数Number能够辨识的安全整数范围。

我们在使用BigInt的时候，必须添加ESNext的编译辅助库。

    "lib": ["es6", "dom", "ESNext"]

在 JavaScript 中采用双精度浮点数,这导致精度有限，比如 Number.MAX_SAFE_INTEGER 给出了可以安全递增的最大可能整数，即2**53-1,我们看一下案例:

    const max = Number.MAX_SAFE_INTEGER;
    const max1 = max + 1
    const max2 = max + 2
    max1 === max2 //true

max1与max2居然相等？这就是超过精读范围造成的问题，而BigInt正是解决这类问题而生的:

    // 注意，这里是 JavaScript 代码，并不是 typescript
    const max = BigInt(Number.MAX_SAFE_INTEGER);
    
    const max1 = max + 1n
    const max2 = max + 2n
    
    max1 === max2 // false

值得注意的是我们需要用 BigInt(number) 把 Number 转化为 BigInt,同时如果类型是 BigInt ,那么数字后面需要加 n ,就如同上面例子的 const max1 = max + 1n 中的 1n。

在TypeScript中，number 类型虽然和 BigInt 都是有表示数字的意思，但是实际上两者类型是不同的:

    declare let foo: number;
    declare let bar: bigint;
    
    foo = bar; // error: Type 'bigint' is not assignable to type 'number'.
    bar = foo; // error: Type 'number' is not assignable to type 'bigint'.

### 4、Typescript其他常见类型

#### 1、计算机类型系统理论中的顶级类型

-   any

	为在编程阶段还不清楚类型的变量指定一个类型，这些值可能来自动态内容，比如来自用户输入或者第三方代码库。
	此时不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。那么可以使用any类型来标记这些变量：

	let  notSure： any = 4；
	notSure = "maybe a string instead";

	any类型是多人协作项目的大忌，很可能把typescript变成AnyScript，通常的不得已的情况下，不应该首先考虑使用此类型、

- unknown

	unknown是TypeScript引入了新类型。是any对应的安全类型。
	unknown和any的主要区别是unknown类型会更加严格；在对unknown类型的值执行大多数操作之前,我们必须进行某种形式的检查,而在对 any 类型的值执行操作之前,我们不必进行任何检查。

    我们先看一下他跟 any 的共同点,它跟 any 一样,可以是任何类型:

        let value: any;
      
        value = true;             // OK
        value = 1;                // OK
        value = "Hello World";    // OK
        value = Symbol("type");   // OK
        value = {}                // OK
        value = []                // OK

#### 2、类型系统中的底部类型：

- never

#### 3、非原始类型（non-primitive type）

- obj

其他常见的元祖、数组等



#### 4、数组（Array）


​    const list: number[] = [1, 2, 3] 或const list: Array<number>= [1, 2, 3]

#### 5、元祖（Tuple）

let x:[string,number]

超出长度存在元祖越界问题

​	const tuple: [string, number] = ['a', 1]; 

​	tuple.push(2); // ok 

​	console.log(tuple); // ["a", 1, 2] -> 正常打印出来

​	console.log(tuple[2]); // Tuple type '[string, number]' of length '2' has no element at index '2'

#### 6、对象（Object）

object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。

#### 7、枚举类型（Enum）

当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加:

编译后的 JavaScript 中体现出来了,因为 `Direction[Direction["Up"] = 10] = "Up"` 也就是 `Direction[10] = "Up"` ,所以我们可以把枚举类型看成一个JavaScript对象，而由于其特殊的构造，导致其拥有正反向同时映射的特性。

### 5、接口（interface）

TypeScript 的核心原则之一是对值所具有的结构进行类型检查,它有时被称做“鸭式辨型法”或“结构性子类型化”。

`readonly isMale: boolean,` 利用readonly把一个属性变成只读属性，之后就无法对他进行修改

`age?: number,`age属性既可能是`number`类型也可能是`undefined`

