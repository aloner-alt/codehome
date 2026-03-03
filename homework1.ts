// let secretNumber:number = 7
// let geas:number = 3

// if (secretNumber = geas){
//     console.log('ты угадал число');
// }

// else {
//     console.log('ты neугадал число');
// }


///////////////////////////////////////////////////////////////////////////////

// let purchaseAmount:number = 45463
// let sum:number = purchaseAmount * 10/100

// if (purchaseAmount > 5000 ){
//     console.log("скида 10% сумма к поалате  ", sum  )
// }
///////////////////////////////////////////
// let age: number = 72;


// if(age >= 60 ){
//     console.log("пенсия")
// }
// else if (age >= 18 ){
//     console.log("старый")
// }
// else if (age >= 12 ){
//     console.log("подросток")
// }
// else if (age >= 0 ){
//     console.log("ребенок")
// }
////////////////////////////////////////////////////////////

// let adm:string = "aloner"
// let pass:string = "aloner1"
// let inputadm:string = "aloner"
// let inputpass:string = "aloner1"


// if (adm === inputadm && pass === inputpass) {
//     console.log("Добро пожаловать");
// }
// else if (adm !== inputadm && pass === inputpass) {
//     console.log("Пользователь не найден");
// }
// else if (adm === inputadm && pass !== inputpass) {
//     console.log("Неверный пароль");
// }




/////////////////////////////////////////

// let parity :number = 17


// if ( parity %2 === 0) {
//     console.log("четное");
// }

// else {
//     console.log("нечетное");
//
////////////////////////////////////////////////////////////////
// --- switch ---
// let day:number = 6
// let dayname:string

// switch (day) {
//     case 1:
//         dayname = "Понедельник";
//         break;
//     case 2:
//         dayname = "Вторник";
//         break;
//     case 3:
//         dayname = "Среда";
//         break;
//     case 4:
//         dayname = "Четверг";
//         break;
//     case 5:
//         dayname = "Пятница";
//         break;
//     case 6:
// 	    dayname = "Выходной";
//         break;

//     case 7:
//         dayname = "Выходной";
//         break;
// }

// console.log(dayname);
//////////////////////////////////////////////
//44444444444444444444444444444444444444444444????
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }
////////////////////////////////////////////////////
// let sum:number = 1
// let num:number = 1

// while (num <= 10) {
//     sum = sum * num
//     num++
// }

// console.log(sum);
//////////////////////////////////////////////////
// let ran:number
// let a:number = 0

// do {
//     ran = ( Math.floor(Math.random() * 10) + 1)
//     a++;
//     console.log(ran);
// } while (ran !== 7)

// console.log(a)
// let sum:number = 0

// for (let i = 1; i <= 50; i++) {
//     sum += i

//     if (sum > 100) {
//         console.log( i);
//         break;
//     }
// }
////////////////////////////////////////////////
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// ///////////////////////////////////////////////////////
// for (let i = 3; i <= 6; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " * " + j + " = " + (i * j));
//     }
// }
///////////////////////////////////////////////////////
// let a:number = 1;

// for (let i = 5; i >= a; i--) {
//     let b: string = ""
//     for (let j = 1; j <= i; j++) {
//         b += "*"
//     }
//     console.log(b);
// }
///////////////////////////////////////

///5555555555555555555555555555555555555555555555555555555555555555555555555555555555555/


// let cities:string[] = ["анапа", "питер", "кострома", "спб", "новгород"]
// console.log(cities[1],cities[cities.length - 1],cities[3]);
// cities[1] = "Москва"
// cities.push("белгород")
// cities.unshift("минск")
// // console.log(cities)
// cities.pop()
// cities.shift()
// console.log(cities)
// console.log(cities.indexOf("Москва"))
// let num:number[] = [10, 20, 30, 40, 50]
// let total:number = 0
// for (let price of num) {
//     total += price; 
// }
// console.log(total)
////////////////////////////////////////////////////
// let num:number[] = [1,2,3]
// let fakenum:number[]=[...num]
// fakenum.push(4)
// console.log(num)
// console.log(fakenum)




function sum(a:number, b:number): number {
  return a + b;
}

function isPositive(num:number): boolean {
  return num > 0;
}

function getLength(str:string): number {
  return str.length;
}


function max(a:number, b:number): number {
  return a > b ? a : b;
}

function canVote(age:number): boolean {
  return age >= 18;
}


function sumArray(arr:number[]):number {
  return arr.reduce((acc, num) => acc + num, 0);
}

function getLongWords(words:string[]):string[] {
  return words.filter(word => word.length > 5);
}

function doubleNumbers(arr:number[]):number[] {
  return arr.map(num => num * 2);
}

function greet(name:string, title?:string): string {
  return title 
    ? `Привет, ${title} ${name}!`
    : `Привет, ${name}!`;
}

function calculatePrice(price:number, discount:number = 0): number {
  return price - price * (discount / 100);
}


const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach(function(num:number): void {
  console.log(num);
});

const multiplyByThree = (num:number): number => num * 3;