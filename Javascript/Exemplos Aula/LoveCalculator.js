function LoveCalculator(){
    var name1, name2;
    var probLove = Math.random();

    probLove = Math.floor((probLove * 100) + 1);
    name1 = prompt("Qual o nome do primeiro namoroso?");
    name2 = prompt("E o segundo amado, a quem vc quer saber?");
    console.log("A chance de "+ name1 + " e " + name2 + " darem certo é de: "+ probLove);
}

LoveCalculator();