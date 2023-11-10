// Guess Number Game 만들기

//my code
const inputForm = document.querySelector("#form")
const maxInput = document.querySelector("#form div #maxinput");
const guessInput = document.querySelector("#form div #guessinput");
const displayNum = document.querySelector("#displayNum");
const result = document.querySelector("#result");


function randomNumGenerator(event) {
    const inputForm = document.querySelector("#form")
    event.preventDefault();
    
    const maxNum = maxInput.value; 
    const guessNum = guessInput.value;
    
    //alert
    if(guessNum > maxNum){
        alert(`Your guess number should be smaller than your maximum number of ${maxNum}. Please re-enter the number.`);
    }else{
        //generate random number
        const randomNum =  Math.floor(Math.random()* maxNum);
        
        //display input number and random number
        displayNum.innerText =`You chose: ${guessNum}, machine chose: ${randomNum}`

        //result
        // guessNum==randomNum? result.innerText = `You Won!` : result.innerText = `You lost...`
        if(guessNum==randomNum){
            result.innerText = `You Won!`
        }else{
            result.innerText = `You lost...`
        }
    }
    
}
//여기 form 전체 submit 으로 잡아야 함.
inputForm.addEventListener("submit", randomNumGenerator);



// other solution
// inputForm.addEventListener("submit",randomNumGenerator);

// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");
// const maxNumber = document.getElementById("maxNumber");

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "" && maxNumber === "") {
//     return;
//   }
//   const max = maxNumber.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
