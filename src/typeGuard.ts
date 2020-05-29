// 类型守卫
// 类型守卫说白了就是缩小类型的范围
class Person {
    name = 'xiaomuzhu';
    age = 20;
}
class Animals {
    name = 'petty';
    color = 'pink';
}

function getSometing(arg: Person | Animals) {
    // 类型细化为 Person
    if (arg instanceof Person) {
        // console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为 Person
    if (arg instanceof Animals) {
        // console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
        console.log(arg.color); // ok
    }
}

function getSometings(arg: Person | Animals) {
    if ('age' in arg) {
        // console.log(arg.color); // Error
        console.log(arg.age); // ok
    }
    if ('color' in arg) {
        // console.log(arg.age); // Error
        console.log(arg.color); // ok
    }
}

type Foo = {
    kind: 'foo'; // 字面量类型
    foo: number;
};

type Bar = {
    kind: 'bar'; // 字面量类型
    bar: number;
};

function doStuff(arg: Foo | Bar) {
    if (arg.kind === 'foo') {
        console.log(arg.foo); // ok
        // console.log(arg.bar); // Error
    } else {
        // console.log(arg.foo); // Error
        console.log(arg.bar); // ok
    }
}