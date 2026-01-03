const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const min = 50;
const max = 100;
let randomNum;
myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel.textContent = randomNum;
}
