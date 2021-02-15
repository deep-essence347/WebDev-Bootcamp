var randomNumber1=Math.floor(Math.random()*6)+1;

var randomNumber2=Math.floor(Math.random()*6)+1;

var winner=document.querySelector("#winner");
setAttribute();
selectWinner();
function setAttribute(){
    
    document.querySelector(".img1").src="images/dice"+randomNumber1+".png";

    document.querySelector(".img2").src="images/dice"+randomNumber2+".png";

}

function selectWinner(){
    if(randomNumber1>randomNumber2){
        winner.innerHTML="Player 1 wins";
    }
    if(randomNumber2>randomNumber1){
        winner.innerHTML="Player 2 wins";
    }
    if(randomNumber1===randomNumber2){
        winner.innerHTML="Draw";
    }
}