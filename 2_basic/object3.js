const course = {
    coursename :"javascript",
    price:"999",
    courseinstructor:"tanmay"
}

//couse.courseinstructor

const {courseinstructor : instructor} = course

console.log(instructor);

// {
//     "name" : "tanmay",
//     "coursename ": "javascript",
//     "price":"free"
// }

