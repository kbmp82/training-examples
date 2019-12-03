class Person {
  constructor(fName, lName, age) {
    this.firstName = fName
    this.lastName = lName
    this.age = age
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is ${this.age}`
  }
  set fullName(fullName) {
    const name = fullName.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]
  }
  get fullName() {
    return `${this.firstName} ${this.lastName} `
  }
}

//subclass of Person
class Employee extends Person {
  constructor(fName, lName, age, position) {
    super(fName, lName, age)
    this.position = position
  }
  getBio() {
    // name is a *position*
    return `${this.fullName} is a ${this.position}`
  }
  getRetirement() {
    return `${this.firstName} has ` + (65 - this.age) + ` years left`
  }
}


//subclass
class Student extends Person {
  constructor(fName, lName, age, grade) {
    super(fName, lName, age)
    this.grade = grade
  }
  getBio() {
    // if(this.grade >= 70){
    //   return `${this.firstName} is passing the class!`
    // }else{
    //   return`${this.firstName} is failing the class!`
    // }

    //shorthand
    return this.grade >= 70 ? `${this.firstName} is passing the class!` : `${this.firstName} is failing the class!`
  }

  updateGrade(num) {
    this.grade += num
  }
}

const myStudent = new Employee('Kevin', 'Brown', 37, 90)
console.log(myStudent, myStudent.getBio())

myStudent.fullName = 'Kyle McVay'
//myStudent.updateGrade(-50)
console.log(myStudent, myStudent.getBio())

