class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
}
    sayName(){
        console.log(`this is my name ${this.name} `);
    }

    sayAge(){
        console.log(`My age is ${this.age}`);
    }
 
}
const person = new Person("Maria", "29");
person.sayAge();
