"use strict";
// syntax learning
//The interface declaration:
//interface User {
//    name: string;
//    age: number;
//    employed: null;
//    hobby: string;
//}//
//const user: User = {
//    name: 'Pedro',
//    age: 23,
//    employed: null,
//    hobby: 'Sports'
//}//
//console.log(user)
//interface Groceries {
//    name: string;
//    price: number;
//    quantity: number;
//}
//const list: Groceries = {
//    name: "Milk",
//    price: 8.50,
//    quantity: 2
//}
//console.log(list.name, list.price, list.quantity)
//------------------------------------------------------------------------
//Classes:
//class User {
//    name: string //here we declare the type of "this.name"
//    age: number //here we declare the type of "this.age"
//    constructor(name: string, age: number){
//        this.name = name,
//        this.age = age
//    }
//    talk = () =>{
//        console.log(`${this.name} is ${this.age} years old and says Hello!`)
//    }
//}
//const Pedro = new User('Pedro', 23)
//Pedro.talk()
//class Person {
//    name: string
//    age: number
//    hobby: string
//    constructor(name: string, age: number, hobby: string){
//        this.name = name
//        this.age = age
//        this.hobby = hobby
//    }
//    sayHello() {
//        return `${this.name} is ${this.age} years old. Likes to ${this.hobby} and says hello, world!`
//    }
//}
//const p1 = new Person('Pedro', 23, 'Code');
//const p2 = new Person('Sara', 21, 'in Natur Gehen');
//console.log(p1.sayHello(), p2.sayHello());
//class Animal {
//    Sounds: string;
//    makeSounds(){
//        console.log(this.Sounds)
//    }
//}
//class Cat extends Animal {
//    constructor(){
//        super();
//        this.Sounds = 'Meow';
//    }
//}
//const cat: Animal = new Cat();
//cat.makeSounds();
//enum Service {
//    Shower,
//    dry,
//    hairCut
//}
//class Dog {
//    Name: string;
//    Age: number;
//    OwnerName: string;
//    Service: Service
//    constructor(Name: string, Age: number, OwnerName: string, Service: number){
//        this.Name = Name
//        this.Age = Age
//        this.OwnerName = OwnerName
//        this.Service = Service
//    }
//    shower(): void{
//        console.log(`${this.Name} needs a shower`)
//    }
//    hairCut(): void{
//        console.log(`${this.Name} needs Hair cut`)
//    }
//    dry(): void{
//        console.log(`${this.Name} is clean and ready to dry`)
//    }
//    callOwner(): void{
//        console.log(`${this.Name}'s service is ready. Call ${this.OwnerName}`)
//    }
//}
//const petProcess = (pet: Dog) => {
//    switch(pet.Service){
//        case 0+1: pet.shower(); return [pet.Name, pet.Age, pet.OwnerName]
//        break;
//        case 1+1: pet.dry(); return [pet.Name, pet.Age, pet.OwnerName]
//        break;
//        case 2+1: pet.hairCut(); return [pet.Name, pet.Age, pet.OwnerName]
//        break;
//        case 3+1: pet.callOwner(); return [pet.Name, pet.Age, pet.OwnerName]
//        break;
//        default: `Error`
//        break;
//    }
//}
//const myPet = new Dog('Lily', 3, 'Pedro', 4)
//console.log(petProcess(myPet))
//encapsulation with "private" properties and methods:
//class Food {
//    Name: string;
//    energy: number = 0;
//    constructor(Name: string, energy: number){
//        this.Name = Name
//        this.energy = energy
//    }
//}
//const carrot = new Food('Carrot', 10)
//const bone = new Food('Bone', 5)//
//class Dog {
//    Name: string;
//    private energy: number = 100;//
//    constructor(Name: string){
//        this.Name = Name
//    }
//    bark(): void {
//        console.log('AU-AU');
//        this.energy -= 10;
//        if(this.energy <= 80){
//            console.log(`${this.Name} have ${this.energy} of energy`)
//            this.isLowEnergy()
//        } else if(this.energy >= 80 && this.energy <= 95){
//            console.log(`${this.Name} have ${this.energy} of energy`)
//            this.isAlmostFull()
//        } else if(this.energy === 100) {
//            this.isFull()
//        }
//    }
//    private isLowEnergy(): boolean {
//        if(this.energy <= 80){
//            this.eat(carrot);
//        }
//        return true
//    }
//    private isAlmostFull(): boolean {
//        if(this.energy >= 80 && this.energy <= 95){
//            this.eat(bone);
//        } else {
//            this.isFull()
//        }
//        return true
//    }
//    private isFull(): void {
//        console.log(`${this.Name} is full of energy`)
//    }
//    eat(food: Food): void {
//        if(this.energy < 100){
//            this.energy += food.energy
//            console.log(`Now ${this.Name} have ${this.energy} of energy`)
//        }
//    }
//}
//const Lily = new Dog('Lyli')
//Lily.bark()
//Lily.bark()
//Lily.bark()
//Lily.bark()
//const Bob = new Dog('Bob')
//Bob.bark()
//Bob.eat(bone)
//----------------------------------------------------------------------------------------------------
//interface and classes:
//interface Groceries {
//    name: string;
//    price: number;
//    quantity: number;
//    product(x: number, y: number): number;
//}//
//class Car implements Groceries {
//    name: string;
//    price: number;
//    quantity: number;
//    constructor(name: string, price: number, quantity: number){
//        this.name = name
//        this.price = price
//        this.quantity = quantity
//    }
//    product(x: number, y: number): number {
//        return x * y;
//    }
//}
//const c1: Groceries = new Car('Milk', 8.50, 3);
//console.log(c1.product(c1.price, c1.quantity));
//interface Printable {
//    print(): void
//}//
//class TheDocument implements Printable {
//    print(){
//        console.log('Printing document...')
//    }
//}
//const doc: Printable = new TheDocument();
//doc.print();
//interface Car {
//    parts: Array<string>
//    assembly(): void
//}
//class CarModelA implements Car {
//    parts: string[] = ['engine1.0', 'manual_transmission']
//    assembly() {
//        const car = this.parts.join('.')
//        console.log(car)
//    }
//}
//class CarModelB implements Car {
//    parts: string[] = ['engine2.0', 'automatic_transmission']
//    assembly() {
//        const car = this.parts.join(',')
//        console.log(car)
//    }
//}
//const c1: Car = new CarModelA()
//const c2: Car = new CarModelB()
//function assemblyCars(cars: Array<Car>){
//    cars.forEach((car) => car.assembly())
//}
//assemblyCars([c1, c2])
//-----------------------------------------------------------------------------------------------
// enum:
//enum Num {
//    num,
//    num2,
//    num3,
//    num4 = '4'
//}
//const getData = (data: any): Num => {
//       let theData: Num = data.reduce((acc: number, x: number) => acc * x, 1)
//       return theData
//}
//console.log(getData([2,4,6,7,8]))
//-------------------------------------------------------------------------------------------------
//tuple:
//using arrays:
//const Pedro: [string, number, string] = ['Pedro', 23, 'fishing']//
//const getUserNameAndAge = (user: [string, number, string]): void => {
//    console.log([user[0], user[1], user[2]]) 
//}
//getUserNameAndAge(Pedro)
//const dog: [string, number, string, string] = ['', 0, '', '']
//const newDogs = dog.map((dogs): [string, number, string, string] => {
//   return [dogs = 'Bily',
//    dogs = 2,
//    dogs = 'Caramel',
//    dogs = 'coffap'] 
//})//
//console.log(newDogs)
//let Name: [string, string, boolean] = ['Jacob', 'Cardoso', false];
//Name[0] = 'Pedro'
//Name[1] = 'Henrique'
//Name[2] = true
//console.log(Name)
//using objects:
//interface Person {
//    Name: string,
//    Age: number,
//    Hobby: string
//}
//const Pedro: Person = {
//    Name: 'Pedro',
//    Age: 23,
//    Hobby:'fishing'
//}
//function getUserNameAndAge(user: Person): {Name: string}  {
//    return {
//        Name: user.Name
//    }
//}
//console.log(getUserNameAndAge(Pedro))
//interface IKunde {
//    Name: string,
//    guthaben: number,
//    einzahlen: Function
//}
//let Kundel1: IKunde =  {
//    Name: 'Pedro',
//    guthaben: 1000,
//    einzahlen: function (summe: number): number {
//        this.guthaben = this.guthaben + summe
//        return this.guthaben
//    }
//}
//let kunden: IKunde[] = []
//Kundel1.einzahlen(600)
//kunden.push(Kundel1)
//console.log(kunden)
//interface Person {
//    Name: string,
//    Age: number,
//    Adresse: [string, number],
//    say: Function
//}
//const person: Person = {
//    Name: 'Pedro',
//    Age: 23,
//    Adresse: ['Villa União', 74313080],
//    say: function(){
//        console.log(`${person.Name} says Hello from ${person.Adresse}`)
//    }
//}
//person.say()
//using enum and type:
//enum Gender { //Enums have a implicit type which is number. 
//    Male,     //Getting the values it will have the values of the instances of the properties: 0 until the last one.
//    Female
//}
//enum Roles {
//    Admin,
//    NormalUser
//}
//type User = {
//    Name: string,
//    Age: number,
//    Gender: Gender,
//    Role: Array<Roles>
//}
//const Pedro: User = {
//    Name: 'Pedro',
//    Age: 23,
//    Gender: Gender.Male,
//    Role: [Roles.NormalUser]
//}
//const Sara: User = {
//    Name: 'Sara',
//    Age: 21,
//    Gender: Gender.Female,
//    Role: [Roles.Admin]
//}
//const getUserNameAndAge = (user: User): [string, number, number[]] => {
//    return [user.Name, user.Age, user.Role]
//}
//console.log(getUserNameAndAge(Pedro))
//console.log(getUserNameAndAge(Sara))
//-----------------------------------------------------------------------------------------------------------------
//Optional properties: 
//type User = {
//    Name: string,
//    Age: number,
//    ID: number,
//    Hobby?: string
//}
//const Persons: Array<User> = [
//    {
//        Name: 'Pedro',
//        Age: 23,
//        ID: 1,
//        Hobby: 'Coding'
//    },
//    {
//        Name: 'Sara',
//        Age: 21,
//        ID: 2,
//    }
//]
//const getUserNameAndAge = (user: User): [string, number, unknown] => {
//    return [user.Name, user.Age, user.Hobby]
//} 
//console.log(getUserNameAndAge(Persons[0]))
//console.log(getUserNameAndAge(Persons[1]))
//-------------------------------------------------------------------------------------------------------
//DOM typing:
//type HTMLElement = Element / Text / Content
//const myEl: HTMLElement | null = document.getElementById('Exemple')
//const myDiv: HTMLDivElement = document.getElementById('Exemple') as HTMLDivElement
//querrySelector and createElement:
//const elements: HTMLElement | null = document.querySelector('li')
//const p: HTMLParagraphElement = document.createElement('p')
//----------------------------------------------------------------------------------------------------------
//inheritance:
//class Car {
//    totalSpeedy: number
//    speedy: number
//    private gears: number//
//    constructor(totalSpeedy: number, speedy: number, gears: number){
//        this.totalSpeedy = totalSpeedy
//        this.speedy = speedy
//        this.gears = gears
//    }
//    accelerate(): void {
//        if(this.speedy >= this.totalSpeedy){
//            console.log(`${this.speedy += this.totalSpeedy / this.gears}`)
//        }
//    }
//}
//class ModelA extends Car {
//    constructor() {
//        super(150, 0, 6)
//    }
//}
//class ModelB extends Car {
//    private sportMode: boolean = false
//    constructor(){
//        super(200, 50, 6)
//    }
//    toggleSportMode(){
//        this.sportMode = !this.sportMode
//        this.totalSpeedy += this.sportMode ? 50 : -50
//    }
//}
//const c1: ModelA = new ModelA()
//const c2: ModelB = new ModelB()
//const cars: Array<Car> = [c1,c2]
//console.log(cars)
//--------------------------------------------------------------------------------------------
//Generics:
//const names: Array<string> = ['Maria', 'John']
//const users: Array<object> = [
//    {Name: 'Maria', Age: 25},
//    {Name: 'John', Age: 26}
//]
//type Page<T> = { //with "T" we can define the type latter
//    list: Array<T>
//    totalPages: number
//    currentPage: number
//    itemsPerPaga: number
//    totalItems: number
//}
//let numArr = [1,2,3,4]
//let strArr = ['a','b','c','d']
//const insertReverse = (array: number[], val: number) => {
//    const newArr = [...array, val]
//    newArr.sort((a,b) => {
//        return b - a
//    })
//    return newArr
//}
//console.log(insertReverse(numArr, 5))
//console.log(insertReverse(strArr, 5))// in this way we should have another insertReverse function
// but with the type of string. It would be to much code...
// instead we can use generics as follow:
//let numArr = [1,2,3,4]
//let strArr = ['a','b','c','d']
//const insertReverse = <T>(array: T[], val: T) => {
//    const newArr = [...array, val]
//    newArr.reverse()
//    return newArr
//}
//console.log(insertReverse(numArr, 5))
//console.log(insertReverse(strArr, 'Hi'))
//-----------------------------------------------------------------------------------------
//Optional chaining operator: 
//const Pedro = {
//    Name: 'Pedro',
//    NachName: {
//        first: 'Jacob',
//        second: 'Cardoso'
//    }
//}
//const Second = Pedro.NachName?.second;
//console.log(Second)
//const obj = {
//    methode(){
//        console.log('methode wird aufgerufen')
//    }
//}
//obj.methode?.()
