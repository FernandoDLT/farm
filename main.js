class Animal{
        constructor(name){
        this.name = name
    }
    get name() {
        return this.name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}

class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}

class Bird extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log('F%#%#$%K YOU!!')
    }
}

class Fish extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log('Bloop...Bloop...Bloop')
    }
}

class Lizzard extends Animal {
    constructor(name,breed) {
        super(name)
        this.bread = breed
    }
    speak() {
        console.log('Sssslup...Ssslup')
    }
}

let simba = new Dog('Simba', 'Shepard')
let mischa = new Cat('Mischa', 'Persian')
let paco = new Bird('Paco', 'Cacatoo')
let phil = new Fish('Phil', 'Gold Fish')
let larry = new Lizzard('Larry', 'Gecco')

class Animal {
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} meows`)
    }
    }
    
let bucky = new Dog('Bucky', 'Mastiff')
let catrina = new Cat('Catrina', 'Mokto')