/* Using constructor and prototype */

//constructor
const Person = function (fName, lName, age) {
    this.firstName = fName
    this.lastName = lName
    this.age = age
    // this.getBio = function (){
    //   return `${this.firstName} ${this.lastName} is ${this.age}`
    // }
}

//Prototype getBio
Person.prototype.getBio = function () {
    return `${this.firstName} ${this.lastName} is ${this.age}`
}

//Prototype setName
Person.prototype.setName = function (newName) {
    this.firstName = newName
}


const me = new Person('Kevin', 'Brown', 37)
const you = new Person('Danielle', 'Giordano', 32)
console.log(me.getBio(), you.getBio())
