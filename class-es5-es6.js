/* ES6 Classes */

// super class
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    return `Hello, my name is ${this.name}`;
  }
  static testStaticMethod() {
    return `Static Method`;
  }
}

// sub class
class FireMan extends Person {
  constructor (name, age, rank) {
    super(name, age);
    this.rank = rank;
  }
  get rank() {
    return this._rank;
  }
  set rank(rankLevel) {
    this._rank = rankLevel;
  }
}


/* ES5 Classes */

// super class
function PersonES5(name, age) {
  this.name = name;
  this.age = age;
  this._privateProperty

  // what about using getter/setter to sanitize constructor data?
}

// instance method
PersonES5.prototype.sayName = function () {
  return `Hello, my name is ${this.name}`;
}

// static method
PersonES5.testStaticMethod = function () {
  return `Static Method`;
}

// create getter and setter on prototype
Object.defineProperty(PersonES5.prototype, "specialAge", {
  get() { return this._age; },
  set(age) { this._age = age + 1; },
  enumerable: true,
  configurable: true
});

const boy = new PersonES5("Chad", 9);
boy.specialAge = 67; // this is on the prototype
console.log(boy.specialAge); // 68
console.log(boy.age); // 9
console.log(boy); // notice the new _age prop

// sub class
function FireManES5(name, age, rank) {
  PersonES5.call(this, name, age)
  this.rank = rank;
};

// inherit instance methods from super class
Object.setPrototypeOf(FireManES5.prototype, PersonES5.prototype);

// inherit static methods from super class
Object.assign(FireManES5, PersonES5);

const fireBoy = new FireManES5("Bill", 19, 2222);
console.log(fireBoy);
