// Player 1
var imageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", 
                  "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// Player 2
var imageArray2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", 
                  "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// This is a protype with only JavaScript
//swal("Welcome To The Dice Game!", "To Play All With Your Friends All You Need To Do is Refresh The Page 😄");

function randomDice()
{
    // Randomization for Array of Dice 1 (Player 1)
    var numOfImages = imageArray.length;
    var randomDices = Math.floor(Math.random() * numOfImages);
    var randomizedDice = imageArray[randomDices];

    // Randomization for Array of Dice 2 (Player 2)
    var numImgs2 = imageArray2.length;
    var randomDices2 = Math.floor(Math.random() * numImgs2);
    var randomizedDice2 = imageArray2[randomDices2];


    document.getElementById("image").src=randomizedDice;
    document.getElementById("image2").src=randomizedDice2;

    // Case if both players tie
    if(randomizedDice === randomizedDice2)
    {
        document.querySelector("h1").innerHTML = "It is a Draw!";
    }

    // Case if Player 1 has a greater value than Player 2
    if(randomizedDice > randomizedDice2)
    {
        document.querySelector("h1").innerHTML = "Player 1 Won! 😆";
    }

    // Case if Player 2 has a greater value than Player 1
    if(randomizedDice2 > randomizedDice)
    {
        document.querySelector("h1").innerHTML = "😱 Player 2 Won!";
    }
}

randomDice();

//Working on random image after every refresh!