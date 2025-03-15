//array


const myArr = [0,1,2,3,4,5,6,7,'tanmay']
const myHero = ['skatiman','naagraj']

const myArr2= new Array(1,2,3,4,5)


//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(0)

// console.log(myArr)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


//Slice or Splice

// console.log("A ",myArr);

// const myn1 =myArr.slice(1,3)

// console.log(myn1);
// console.log("B " , myArr);

// const myn2 =myArr.splice(1,3)
// console.log("c " , myArr);
// console.log(myn2);


const marvel_Heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_Heros.push(dc_heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const allhero=marvel_Heros.concat(dc_heros)
// console.log(allhero);

// const all_new_hero = [...marvel_Heros,...dc_heros]
// console.log(all_new_hero);


// const another_arry = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_arry.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("TANMAY"))
console.log(Array.from("TANMAYA"))

console.log(Array.from({name:"tanmaya"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));








