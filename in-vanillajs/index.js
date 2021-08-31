let winnerNumberList = [3,6,7];
let surpriseBox = {};

let inputField = document.querySelector('#username');
let button = document.querySelector('button');
let winner = document.querySelector('#winner')

button.addEventListener('click', e=>{
      e.preventDefault();
      let value = inputField.value;
      if(!surpriseBox[value]){
        surpriseBox[value] = 1;
      } else {
        surpriseBox[value] += 1;
      }
      inputField.value = "";
     console.log(surpriseBox);
     findWinner(value) 
})

function findWinner(value){
  for(let i = 0; i < winnerNumberList.length; i++) {
    if(surpriseBox[value] === winnerNumberList[i]){
      winner.innerHTML = `winner is ${value}`
      return;
    }
  }
}

