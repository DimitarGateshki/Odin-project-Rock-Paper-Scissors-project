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
    game(playRoun(playerPlay(0),computerPlay()));
});
scissors.addEventListener("click", function() {
    game(playRoun(playerPlay(0),computerPlay()));
});


function computerPlay(){
    return arr[Math.floor(Math.random()*3)];
}

function playerPlay(int){
    return arr[int];

}


function playRoun(player,computer){
    let massage="";

    if (player.toLowerCase()=="rock") {

        if (computer.toLowerCase()=="rock") {
            massage="Draw! Rock equals Rock";
        }else if(computer.toLowerCase()=="paper"){
            massage= "You lose! Paper beats Rock";
        }else{
            massage="You win! Rock beats Scissors";
        }


    }else if(player.toLowerCase()=="paper"){

        if (computer.toLowerCase()=="rock") {
            massage="You win! Paper beats Rock";
        }else if(computer.toLowerCase()=="paper"){
            massage="Draw! Paper equals Paper";
        }else{
            massage="You lose! Scissors beat Paper";
        }


    }else{

        if (computer.toLowerCase()=="rock") {
            massage="You lose! Rock beats Scissors";
        }else if(computer.toLowerCase()=="paper"){
            massage="You win! Scissors beats Paper";
        }else{
            massage= "Draw! Scissors equals Scissors";


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
            rock.style.display='none';
            paper.style.display='none';
            scissors.style.display='none';

            if (player>computer) {
                result.textContent=`Congratulations! You win the game!`;
            } else {
                result.textContent=`OH,no! You lose the game!`;
            }
            document.querySelector('.gameSet').textContent=`The result is ${player} to ${computer}`;;
        }
}

