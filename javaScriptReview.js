class Human {
    constructor() {
        this.gender = 'Male'
    }
    printMyGender(){
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor() {
        super()
        this.name = 'Max'
    }
    printMyName(){
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();

const filter = (...args) => {
    return args.filter(el => el % 2 === 1)
}
console.log(filter(1,2,3,4,5))

const numbers = [1,2,3];

const doubleArr = numbers.map((num) => {
    return num*2;
})

console.log(doubleArr)