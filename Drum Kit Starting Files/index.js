
var buttonListener=document.querySelectorAll(".drum");

buttonListener.forEach(button => {
    button.addEventListener("click", function (){
        var buttonText = this.innerHTML;

        audioPlay(buttonText);
        buttonAnimation(buttonText);
    })
});

document.addEventListener("keypress",function (event){
    audioPlay(event.key);
    buttonAnimation(event.key);
});

function audioPlay(key){
    var audioFile;

    switch(key){
        case "w":
            audioFile="crash";
            break;
        case "a":
            audioFile="kick-bass";
            break;
        case "s":
            audioFile="snare";
            break;
        case "d":
            audioFile="tom-1";
            break;
        case "j":
            audioFile="tom-2";
            break;
        case "k":
            audioFile="tom-3";
            break;
        case "l":
            audioFile="tom-4";
            break;
        default: 
            console.log("Error");
    }

    if(audioFile!==null){
        var audio=new Audio('sounds/'+audioFile+'.mp3');
        audio.play();
    }
    
}

function buttonAnimation(currentKey){

    var activeButton= document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}