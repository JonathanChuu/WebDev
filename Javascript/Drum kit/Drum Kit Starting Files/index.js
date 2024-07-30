var drumButtonLenght = document.querySelectorAll(".drum").length;

//código para atribuir função aos click de mouse somente
for (var i=0; i<drumButtonLenght; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//código que recebe os clicks do teclado e executa uma função quando eles forem apertados, ou seja, é uma parte do código especifica para eventos do teclado
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


//função para executar som de acordo com o caracter do evento ocorrido
function makeSound(key){
    switch (key){
        case "w":
            var tom1Audio = new Audio("sounds/tom-1.mp3");
            tom1Audio.play();
            break;
        
        case "a":
            var tom2Audio = new Audio("sounds/tom-2.mp3");
            tom2Audio.play();
            break;

        case "s":
            var tom3Audio = new Audio("sounds/tom-3.mp3");
            tom3Audio.play();
            break;

        case "d":
            var tom4Audio = new Audio("sounds/tom-4.mp3");
            tom4Audio.play();
            break;
        
        case "j":
            var crashAudio = new Audio("sounds/crash.mp3");
            crashAudio.play();
            break;
        
        case "k":
            var kickAudio = new Audio("sounds/kick-bass.mp3");
            kickAudio.play();
            break;
        
        case "l":
            var snareAudio = new Audio("sounds/snare.mp3");
            snareAudio.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
}



