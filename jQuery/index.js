$("h1").css("color", "red");

$("button").click(function(){
    $("h1").css("color", "purple");
});

$(document).keypress(function(event){
    $("h1").html(event.key);
});

