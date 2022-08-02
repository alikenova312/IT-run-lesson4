// //условное ветвление

// let name = 'Aisyy'
// if (name === 'bek'){
//     console.log('true')
// } else {
//     console.log('false')
// }

// let name = 'max'
// console.log(Boolean(name))
// console.log(Boolean(2))
// console.log(Boolean(0))
// console.log(Boolean({}))
// console.log(Boolean([]))

// let a = 5;
//
// if (a) {
//     console.log('true')
// } else {
//     console.log('false')
// }


// let car = {
//     model: 'bmw',
//     turbo: false
// }
//
// if (car.turbo === true ){
//     console.log('yeas')
// } else {
//     console.log('no')
// }

// let person = {
//     name: 'Aisy',
//     age: 21
// }
//
// if (person.age === 25 || person.age === 20){
//     console.log('можешь войти')
// }else {
//     console.log('не можешь войти')
// }


// let person = {
//     age: 35,
//     name: 'Олень'
// }
// if (person.age < 20){
//     console.log('он свой')
// } else {
//     console.log('он чужой')
// }
//
// person.name.length <= 7 ? console.log('валидация прошла успешно') : console.log('он чужой');


// let link = 'https://google.com'
//
//
// link.startsWith('https') ? console.log('ваш сайт защищен') : link.startsWith('http') ? console.log('твой сайт не защищен') : console.log('неверная ссылка')


// let a = 2 + 2;
//
// switch (a) {
//     case 3:
//         alert( 'Маловато' );
//         break;
//     case 4:
//         alert( 'В точку!' );
//         break;
//     case 5:
//         alert( 'Перебор' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

// let name = 'max'
//
// switch (name){
//     case 'max' :
//         console.log('your name muslim')
//         break
//     case 'akdil' :
//         console.log('your name max')
//         break
//     default :
//         console.log('i do not know your name')
// }

// let a = 10;
// switch (a){
//     case a > 5 && a < 15 : console.log('5-15');
//     break
//     case a > 10 && a < 20 : console.log('10-20');
//     break
//     case a > 0 && a < 10 : console.log('0-10')
//     break
//     default : console.log('ahah')
// }


let car = 'lada'
switch (car) {
    case "bmw":
    case "mers":
        console.log('germany')
        break
    case "lada":
    case "niva":
        console.log('russia')
        break
    case "hunday":
    case "honda":
        console.log('korea')
}
