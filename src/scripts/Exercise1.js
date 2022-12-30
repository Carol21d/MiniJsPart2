class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
}
    
    dataPerson(){
        console.log(`My name is ${this.name} and I'm ${this.age}`);
    }
 
}

const name = prompt('Enter your name');
const age = prompt('Enter your age');
const person = new Person(name, age);
person.dataPerson();

