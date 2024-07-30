//gera a sequencia de cores que vão ser usadas pro jogo
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    userClickPattern = [];

    //animação da sequencia do jogo
    $("#" + randomChosenColour).fadeOut(100);
    $("#" + randomChosenColour).fadeIn(100);

    //uso da função para gerar som pra sequencia do jogo
    var randomChosenColour_Audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    randomChosenColour_Audio.play();

    //determina o nivel do jogo
    level = level + 1;
    $("#level-title").text("Level " + level);
}


//criando animação do botão e reprodução de som

function makeSound(chosenName){
    
    // tocando som para o botão com a mesma cor que o selecionado
    var randomChosenColour_Audio = new Audio("sounds/" + chosenName + ".mp3")
    randomChosenColour_Audio.play();
}


//animação do click do usuario
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}


//detectando clicks

$(".btn").on("click", function (){
    var userChosenColour = this.id;
    userClickPattern.push(userChosenColour);
    makeSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickPattern.length-1);

});



//checa a resposta do jogador
function checkAnswer(currentLevel){
        if (userClickPattern[currentLevel] === gamePattern[currentLevel]){
            if(userClickPattern.length === gamePattern.length){
                setTimeout(function(){
                    nextSequence()
                }, 1000);
            }
        } else {
            gameOver();
        }
}

//gameOver
function gameOver(){
    gamePattern = [];
    userClickPattern = [];
    level = 0;
    $("#level-title").html("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");}, 200);
    var gameOverSound = new Audio("sounds/wrong.mp3");
    gameOverSound.play();
    startGame();
}


//começa o jogo
var gameStarted = false;

function startGame() {
    if(gameStarted === false){
        $(document).on("keypress", function(){
            $(document).unbind("keypress");
            nextSequence();
        })
    }
}

startGame();





