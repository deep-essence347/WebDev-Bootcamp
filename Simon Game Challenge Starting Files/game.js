var buttonColors= ["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

var level=0;

var hasStarted=false;

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColor=buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

    $("#level-title").text("Level "+level);

    level++;
}

function playSound(soundName){
    var audio=new Audio("sounds/"+soundName+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(nextSequence,1000);
            userClickedPattern=[];
        }
    } else{
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over");
        },200)

        var audio=new Audio("sounds/wrong.mp3");
        audio.play(); 

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    gamePattern=[];

    userClickedPattern=[];

    level=0;

    hasStarted=false;
}

$('.btn').click(function(event){
    var userChosenColor=event.currentTarget.id;

    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

})

$(document).keypress(function(event){
    if(hasStarted===false){
        nextSequence();
        hasStarted=true;
    }
})

