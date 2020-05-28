// function returnItem (para: number): number {
//     return para
// }

// function returnItem (para: string): string {
//     return para
// }
// 那么我们需要变量，这个变量代表了传入的类型，然后再返回这个变量，它是一种特殊的变量，只用于表示类型而不是值。

// 这个类型变量在 TypeScript 中就叫做「泛型」。
// function returnItem<T, U>(tuple: [T, U]): [U, T] {
//     return [tuple[1], tuple[0]];
// }

// 泛型变量 <T>

function getArrayLength<T>(arg: Array<T>) {
    console.log((arg as Array<any>).length) // 类型“T”上不存在属性“length”
    return arg
}


// 泛型接口

interface ReturnItemFn<T> {
    (para: T): T
}

// returnItem([7, 'seven'])

const returnItem: ReturnItemFn<number> = para => para

type Params = number | string

class Stack<T extends Params>{
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

const stack1 = new Stack<number>()
// const stack2 = new Stack<boolean>() // 类型“boolean”不满足约束“Params”。

function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key] // ok
}