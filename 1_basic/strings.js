const name = "tanmay"
const repoCount = 2

//console.log(name + repoCount + "value"); Not recomended


// console.log(`Hello my name is ${name} my repo Count is ${repoCount}`);


 const gameName =new String("tanmay-gaming")
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "   tanmay   "
console.log(newString1);
console.log(newString1.trim());

const url= "https://tanmay.com/tanmay%20sahu"

console.log(url.replace('%20','-'));
 
console.log(url.includes('sumanta'));

console.log(gameName.split('-'));
