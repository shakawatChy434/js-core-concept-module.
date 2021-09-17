// /* console.log('JS Summery File Connected.....!!!!!') */
// /* Json 
// (i). JSON.stringify;
// (ii). JSON.parse;
// */
// const student = {
//     name: 'Shakawat Chowdhury',
//     age: 21,
//     movies: ['King Khan', 'Dhakar King', 'Rickshaw-Owalar Prem']
// }
// /* const studentJSON = JSON.stringify(student);
// console.log(studentJSON);
// const studentParse = JSON.parse(studentJSON);
// console.log(studentParse); */

// /* Fetch */
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data));

// /* Keys & Valus */
// const keys = Object.keys(student);
// const Valus = Object.values(student);

// /* forEach & map function */
// const withOutReturn = numbers.forEach(num => console.log(num));
// const withReturn = numbers.map(num => num * 2);


/* Add or Remove Array  */
// const products = [
//     { name: "Laptop", price: 43000, brand: "HP", color: "silver" },
//     { name: "camera", price: 33000, brand: "canon", color: "black" },
//     { name: "Watch", price: 3000, brand: "casio", color: "white" },
// ]
// const newProducts = { name: "Water Botol", price: 300, brand: "RFL", color: "gray" },
// /* Add new array  */
// const product = [...products, newProducts]
// console.log(product);
// /* Create a new array without one specific item Or
// Remove phone means create a new array withOut the phone; */
// const remaing = products.filter(p => p.name !== 'phone');
// console.log(remaing);


/* Ternury Operator */
/* Declar Normal Function */
// let money = 80;
// let food;
// if (money > 100) {
//     food = 'পুরান ঢাকার কাচ্ছি খামু'
// } else {
//     food = 'তোর কপালে কাচ্ছি নাঈ , পানি খাঁ'
// }
// /* Convert in Ternury Operator */
// let food = money > 100 ? 'পুরান ঢাকায় যামু কাচ্ছি বিরিয়ানী খামু' : "এইবারেও তোর কপালে বিরিয়ানী নাই,মুড়ি খাঁ";
// /* আবার চাইলে ২টা function একসাথেও এড করেও হলে করা যায়  */
// /* (i). ২টা শুর্ত পুরণ করতেই হবে */let food = money > 100 && myPocket > 100 ? 'এবার আর কে টেকায়' : "ভাল করে পকেট চেক কর গাঁদা, যা দুরে গিয়া মর";
// /* (ii). যে-কোন একটা শর্তঈ পুরণ করলেই হবে */ const food = money > 100 || myPocket > 100 ? 'এবার দিলে দিবে না দিলে বিরিয়ানী ডেক্সীসহ গায়েবুল হাওয়া করে দিমু' : "সত্যিই এবার বিরিয়ানী দিবে- আর চিন্তা নাই";


/* Convert Sting to Number &&& Number to String */
const myNo = 50;
const convertSting = myNo + "";
const myString = "439"
const convertNo = +myString;
