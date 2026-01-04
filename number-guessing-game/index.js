const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let isRunning = true;

while(isRunning){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    console.log(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }else if(guess < min || guess > max){
        window.alert("Enter a valid number");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN")
        }else{
            window.alert(`YOU GUESSED IT! The answe was ${answer}. It took you ${attempts} attempts.`);
            isRunning = false;
        }
    }
}