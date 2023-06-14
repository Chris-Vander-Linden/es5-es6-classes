/* ES6 Classes */

// super class
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  // private var
  #privateMsg = "default message";

  // getter and setter
  get msg() { return this.#privateMsg; }
  set msg(message) { this.#privateMsg = `UPDATED MESSAGE: ${message}`; }

  // instance method
  sayName() {
    return `Hello, my name is ${this.name}`;
  }

  // static method
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

  // assigned as default from constructor?
  get rank() {
    return this._rank;
  }
  set rank(rankLevel) {
    this._rank = rankLevel;
  }
}

const es6FireBoy = new FireMan("Chris", 21, "not good");
es6FireBoy.rank = "better"
console.log(es6FireBoy)


/* ES5 Classes */

// super class
function PersonES5(name, age) {
  this.name = name;
  this.age = age;
}

// instance method
PersonES5.prototype.sayName = function () {
  return `Hello, my name is ${this.name}`;
}

// static method
PersonES5.testStaticMethod = function () {
  return `Static Method`;
}

// create getter and setter on prototype.
// NOTE: I didn't use ES6 shorthand method syntax
Object.defineProperty(PersonES5.prototype, "specialAge", {
  get: function() { return this._age; },
  set: function(age) { this._age = age + 1; },
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
