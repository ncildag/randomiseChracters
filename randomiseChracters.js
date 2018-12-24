let randomizeNumber=Math.floor(Math.random()*10);

let name="IT CLUB";

function randomizeCharacters(input){

    let randomizeInput="";

    for (let i=0; i<input.length; i++){
        randomizeInput+=input[Math.floor(Math.random()*input.length)];

    }

    return randomizeInput;

}

console.log(randomizeCharacters("name"));

//The code was written helping ITCLUB //