class Person {
  constructor(fName, lName, age){
    this.firstName = fName
    this.lastName = lName
    this.age = age
  }
  getBio(){
    return `${this.firstName} ${this.lastName} is ${this.age}`
  }
  set fullName(fullName){
    const name = fullName.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]
  }
  get fullName(){
    return `${this.firstName} ${this.lastName} `
  }
}

//subclass of Person
class Employee extends Person{
constructor(fName, lName, age, position){
super(fName, lName, age)
this.position = position
}
getBio(){
  // name is a *position*
  return `${this.fullName} is a ${this.position}`
}
getRetirement(){
  return `${this.firstName} has `+(65 - this.age)+ ` years left`
}
}
//
// const myPerson = new Employee('Kevin','Brown',37, 'web developer')
// myPerson.setName('Kyle')
// console.log(myPerson.getBio(),myPerson.getRetirement())

//subclass
class Student extends Person{
  constructor(fName, lName, age, grade){
    super(fName, lName, age)
    this.grade = grade
  }
  getBio(){
    // if(this.grade >= 70){
    //   return `${this.firstName} is passing the class!`
    // }else{
    //   return`${this.firstName} is failing the class!`
    // }
    return this.grade >= 70 ? `${this.firstName} is passing the class!` : `${this.firstName} is failing the class!`
  }
  updateGrade(num){
    this.grade += num
  }
}

const myStudent = new Employee('Kevin','Brown',37,90)
console.log(myStudent,myStudent.getBio())
myStudent.fullName = 'Kyle McVay'
//myStudent.updateGrade(-50)
console.log(myStudent,myStudent.getBio())





//
// //constructor
// const Person = function (fName, lName, age) {
// this.firstName = fName
// this.lastName = lName
// this.age = age
// // this.getBio = function (){
// //   return `${this.firstName} ${this.lastName} is ${this.age}`
// // }
// }
//
// Person.prototype.getBio = function (){
//   return `${this.firstName} ${this.lastName} is ${this.age}`
// }
//
// Person.prototype.setName = function (newName){
//   this.firstName = newName
// }
// const me = new Person('Kevin','Brown',37)
// const you = new Person('Danielle','Giordano',32)
// //console.log(me.getBio(),you.getBio())

//console.log(me)
