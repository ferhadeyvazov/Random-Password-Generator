// const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
//  ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let firstInp =document.getElementById('firstInp');
let secondInp =document.getElementById('secondInp');


function randomNumber() {
    let min = 33;
    let max = 122;
    return Math.floor(Math.random() * (max-min+1)+min);
}

function startPassGen(){
    firstInp.value='';
    secondInp.value='';
    
    for(let i=0;i<16;i++){
        randomNumber();
        let ceb = String.fromCharCode(randomNumber());
        firstInp.value+=ceb;
    }
    for(let i =0;i<16;i++){
        randomNumber();
        let ceb = String.fromCharCode(randomNumber());
        secondInp.value+=ceb;
    }
}

// let startPassGen = ()=>{
//     firstInp.value="";
//     secondInp.value='';
//         for(let i = 0;i<15;i++){
//             randomNumber();
//             firstInp.value+=characters[randomNumber()]+" ";
            
//         }

//         for(let i=0;i<15;i++){
//                 randomNumber();
//                 secondInp.value+=characters[randomNumber()]+' ';
//         }
// }