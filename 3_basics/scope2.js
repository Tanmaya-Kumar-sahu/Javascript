function one(){
    const username = "tanmay"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
     two()
}

//one()

if (true) {
    const username = "tanmay"
    if (username === "tanmay") {
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website) error
}

//console.log(username) error


// +++++++++++++++++++++++++++++= interesting +++++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1
}
                                  //Hoisting


const addTwo = function(num){
    return num +2
}
console.log(addTwo(5));

