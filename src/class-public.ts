// 在 TypeScript 的类中，成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。
class Car {
    public run() {
        console.log('启动');
    }
}

const car = new Car();
car.run(); // 启动