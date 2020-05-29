// 类型断言
// 但是类型断言不要滥用,在万不得已的情况下使用要谨慎,因为你强制把某类型断言会造成 TypeScript 丧失代码提示的能力。
interface Person {
    name: string
    age: number
}

const person = {} as Person;

person.name = 'Eric Lee';
person.age = 20;