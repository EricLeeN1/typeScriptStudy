// abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

class Animal {
  //   abstract bark(): void;
  private name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number = 0): void {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

// const animal = new Animal() // 无法创建抽象类实例
// 我们不能直接实例化抽象类，通常需要我们创建子类继承基类，然后可以实例化子类

class Cat extends Animal {
  bark() {
    console.log("miao miao");
  }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45){
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

const cat = new Cat('mimi');

cat.bark(); // miao miao
cat.move(10); // roaming the earch...
cat.bark();
let tom:Animal = new Horse('Tommy the Palomino');
tom.move(34);

// console.log(cat.name); //属性“name”为私有属性，只能在类“Animal”中访问。