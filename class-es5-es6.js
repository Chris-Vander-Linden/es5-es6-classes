class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        return `Hello, my name is ${this.name}`;
    }
    static testStaticMethod(){
        return `Static Method`;
    }
    
}


class FireMan extends Person{
    constructor(name, age, rank){
        super(name, age);
        this.rank = rank;
    }
    get rank(){
        return this._rank;
    }

    set rank(rankLevel){
        this._rank = rankLevel;
    }

}







function PersonES5(name, age) {
    this.name = name;
    this.age = age;
}

PersonES5.prototype.sayName = function(){
        return `Hello, my name is ${this.name}`;
    }

PersonES5.testStaticMethod = function(){
        return `Static Method`;
    }

function FireManES5(name, age, rank){
    PersonES5.call(this, name, age)
    this.rank = rank; 
};

// inherit static methods from super class
Object.assign(FireManES5, PersonES5);

// create getter and setters
Object.defineProperty(FireManES5, "rank", {
  get() { return this._rank; },
  set(rankLevel) { this._rank = rankLevel; },
  enumerable: true,
  configurable: true
});