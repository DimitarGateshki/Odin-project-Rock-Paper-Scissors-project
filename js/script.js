const arr=["Rock", "Paper","Scissors"];

function computerPlay(){
    return arr[Math.floor(Math.random()*3)];
}

function playerPlay(int){
    return arr[int];

}

function playRoun(player,computer){
    if (player.toLowerCase()=="rock") {

        if (computer.toLowerCase()=="rock") {
             return "Draw! Rock equals Rock"
        }else if(computer.toLowerCase()=="paper"){
            return "You lose! Paper beats Rock"
        }else{
            return "You win! Rock beats Scissors"
        }


    }else if(player.toLowerCase()=="paper"){

        if (computer.toLowerCase()=="rock") {
            return "You win! Paper beats Rock"
        }else if(computer.toLowerCase()=="paper"){
            return "Draw! Paper equals Paper"
        }else{
            return "You lose! Scissors beat Paper"
        }


    }else{

        if (computer.toLowerCase()=="rock") {
            return "You lose! Rock beats Scissors"
        }else if(computer.toLowerCase()=="paper"){
            return "You win! Scissors beats Paper"
        }else{
            return "Draw! Scissors equals Scissors"
        }
    }
}

function game(){
    let player=0;
    let computer=0;
    let output="";
    for (let i = 0; i < 5; i++) {
        output=playRoun(playerPlay(prompt()-1),computerPlay());
        console.log(output);

        if(output.includes("win")){
            player++;
        }else if(output.includes("lose")){
            computer++;
        }else{
            player++;
            computer++;
        }
    }

    if (player>computer) {
        console.log(`You win the game! ${player} to ${computer}`);
    }else{
        console.log(`You lose the game! ${player} to ${computer}`);
 }
}

game();