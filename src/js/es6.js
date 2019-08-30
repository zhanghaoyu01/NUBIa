class A {
    constructor(name) {
        this.name = name
    }
}
let a = new A('zhangsan');
console.log('hello');

class B extends A {
    constructor() {
        super();
        this.gender = gender;
    }
}