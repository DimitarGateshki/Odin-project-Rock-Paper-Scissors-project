function displayGame(){
    document.querySelector(".title-page").style.display="none";
    document.querySelector(".game").style.display="inline";
    document.querySelector(".result").style.display="inline";
}

function beginAgain(){
    document.querySelector(".title-page").style.display="inline";
    document.querySelector(".result").textContent="Good Luck!";
    document.querySelector(".result").style.display="none";
    document.querySelector(".play-again").style.display="none";


}