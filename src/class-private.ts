// 在 TypeScript 的类中，成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。
class Cars {
    private run() {
        console.log('启动');
    }
}

const cars = new Cars();
// cars.run(); // 属性“run”为私有属性，只能在类“Cars”中访问。