const arr=["Rock", "Paper","Scissors"];

const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const result=document.querySelector(".result");

let player=0;
let computer=0;
let rounds=0;

rock.addEventListener("click", function() {
    game(playRoun(playerPlay(0),computerPlay()));
});
paper.addEventListener("click", function() {
    game(playRoun(playerPlay(1),computerPlay()));
});
scissors.addEventListener("click", function() {
    game(playRoun(playerPlay(2),computerPlay()));
});


function computerPlay(){
    return arr[Math.floor(Math.random()*3)];
}

function playerPlay(int){
    return arr[int];

}


function playRoun(player,computer){
    let massage="";
    let playerSelect=document.querySelector(".player-select");
    let computerSelect=document.querySelector(".computer-select")

    if (player.toLowerCase()=="rock") {
        playerSelect.firstChild.src="imgs/Rock.png";
        playerSelect.lastChild.textContent="Rock";

        if (computer.toLowerCase()=="rock") {
            massage="Draw! Rock equals Rock";
            computerSelect.firstChild.src="imgs/Rock.png";
            computerSelect.lastChild.textContent="Rock";
        }else if(computer.toLowerCase()=="paper"){
            massage= "You lose! Paper beats Rock";
            computerSelect.firstChild.src="imgs/Paper.png";
            computerSelect.lastChild.textContent="Paper";
        }else{
            massage="You win! Rock beats Scissors";
            computerSelect.firstChild.src="imgs/Scissors.png";
            computerSelect.lastChild.textContent="Scissors";
        }


    }else if(player.toLowerCase()=="paper"){
        playerSelect.firstChild.src="imgs/Paper.png";
        playerSelect.lastChild.textContent="Paper";

        if (computer.toLowerCase()=="rock") {
            massage="You win! Paper beats Rock";
            computerSelect.firstChild.src="imgs/Rock.png";
            computerSelect.lastChild.textContent="Rock";
        }else if(computer.toLowerCase()=="paper"){
            massage="Draw! Paper equals Paper";
            computerSelect.firstChild.src="imgs/Paper.png";
            computerSelect.lastChild.textContent="Paper";
        }else{
            massage="You lose! Scissors beat Paper";
            computerSelect.firstChild.src="imgs/Scissors.png";
            computerSelect.lastChild.textContent="Scissors";
        }


    }else{
        playerSelect.firstChild.src="imgs/Scissors.png";
        playerSelect.lastChild.textContent="Scissors";

        if (computer.toLowerCase()=="rock") {
            massage="You lose! Rock beats Scissors";
            computerSelect.firstChild.src="imgs/Rock.png";
            computerSelect.lastChild.textContent="Rock";
        }else if(computer.toLowerCase()=="paper"){
            massage="You win! Scissors beats Paper";
            omputerSelect.firstChild.src="imgs/Paper.png";
            computerSelect.lastChild.textContent="Paper";
        }else{
            massage= "Draw! Scissors equals Scissors";
            computerSelect.firstChild.src="imgs/Scissors.png";
            computerSelect.lastChild.textContent="Scissors";

        }
    }


    document.querySelector('.gameSet').textContent=massage;
    return massage;
}


function game(massage){
    
        if(massage.includes("win")){
            player++;
        }else if(massage.includes("lose")){
            computer++;
        }else{
            player++;
            computer++;
        }
        result.textContent=`The result is ${player} to ${computer}`;
        rounds++;

        if(player==5 || computer==5){
           document.querySelector(".game").style.display="none";
           document.querySelector(".play-again").style.display="flex";
           document.querySelector(".play-again").style.justifyContent="center";
           player=0;
           computer=0;

            if (player>computer) {
                result.textContent=`Congratulations! You win the game!`;
            } else {
                result.textContent=`OH,no! You lose the game!`;
            }
            document.querySelector('.gameSet').textContent=`The result is ${player} to ${computer}`;;
        }
}

