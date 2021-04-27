class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
// let john = new Person(" john", "Sales"); // 类“Person”的构造函数是受保护的，仅可在类声明中访问。
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 属性“name”受保护，只能在类“Person”及其子类中访问。

class Octopus {
//   readonly name: string;
  readonly NumberOfLegs: number = 8;
  constructor(readonly name: string) {
    this.name = name;
  }
}

let dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'Man with the 8 strong legs'; // 无法分配到 "name" ，因为它是只读属性。
