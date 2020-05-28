// abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

// const animal = new Animal() // 无法创建抽象类实例
// 我们不能直接实例化抽象类，通常需要我们创建子类继承基类，然后可以实例化子类

class Cat extends Animal {
    makeSound() {
        console.log('miao miao');
    }
}

const cat = new Cat();

cat.makeSound(); // miao miao
cat.move(); // roaming the earch...