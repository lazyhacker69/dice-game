function Roll(){
    var num1 = Math.floor(Math.random()*6)+1;

    var randomImage1 = "dice"+num1+".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImage1);

    var num2 = Math.floor(Math.random()*6)+1;

    var randomImage2 = "dice"+num2+".png";

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImage2);
    if ( num1 > num2 ){
        var result = document.querySelector("h1");
        result.innerHTML = "Player 1 Wins";
    }
    else if ( num1 < num2 ){
        var result = document.querySelector("h1");
        result.innerHTML = "Player 2 Wins";
    }
    else {
        var result = document.querySelector(".heading-1");
        result.innerHTML = "draw";
    }   
}



document.querySelector("button").addEventListener("click",Roll);
