class Car2 {
    protected run() {
        console.log('启动');
    }
}

class GTR extends Car2 {
    init() {
        this.run();
    }
}

const car2 = new Car2()
const gtr = new GTR()

// car2.run() // [ts] 属性“run”受保护，只能在类“Car2”及其子类中访问。
gtr.init() // 启动...
// gtr.run() // [ts] 属性“run”受保护，只能在类“Car2”及其子类中访问。