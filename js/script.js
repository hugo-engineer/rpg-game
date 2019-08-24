
var ironDisplay = document.getElementById("iron");
var blackDisplay = document.getElementById("black");
var ironHPDisplay = document.getElementById("ironHP");
var blackHPDisplay = document.getElementById("blackHP");
var draxDisplay = document.getElementById("drax");
var draxHPDisplay = document.getElementById("draxHP");


var row1Display = document.getElementById("row1");
var row2Display = document.getElementById("row2");
var row3Display = document.getElementById("row3");

var players = [

    {
        key: 'iron',
        name: "Iron Man",
        hp: 300,
        attack: Math.floor(Math.random() * (35 - 10)),
    }, {
        key: 'black',
        name: "Black Widow",
        hp: 200,
        attack: Math.floor(Math.random() * (15 - 5)),
    }, {
        key: 'drax',
        name: "Drax",
        hp: 150,
        attack: Math.floor(Math.random() * (20 - 7)),
    }
]

var playerNames = Object.keys(players);

var aiSelected;
var selectedUser;
var userSelected;

function userChoice(userChar) {

    if (userSelected == undefined) {

        userSelected = userChar;

        switch (userSelected) {
            case 'iron': row2Display.appendChild(ironDisplay);
                break;
            case 'black': row2Display.appendChild(blackDisplay);
                break;
            case 'drax': row2Display.appendChild(draxDisplay);
        };

        console.log(userSelected);
        aiChoice()
    } else { alert("You have already picked a character.") }

};


// Bug - if ai picked the same character as the user, game would stuff up.
function aiChoice() {

    if (userSelected !== undefined) {

        var aiRandom = Math.round(Math.random() * ((players.length - 1) - 0));
        aiSelected = players[aiRandom].key;

        console.log(aiSelected);

        switch (aiSelected) {
            case 'iron': row3Display.appendChild(ironDisplay);
                break;
            case 'black': row3Display.appendChild(blackDisplay);
                break;
            case 'drax': row3Display.appendChild(draxDisplay);
        };

    }
};


function gameOn() {
    if (userSelected !== undefined && aiSelected !== undefined) {

        var charNo;

        switch (userSelected) {
            case 'iron': charNo = 0;
                break;
            case 'black': charNo = 1;
                break;
            case 'drax': charNo = 2;
        };

        var aiNo;

        switch (aiSelected) {
            case 'iron': aiNo = 0;
                break;
            case 'black': aiNo = 1;
                break;
            case 'drax': aiNo = 2;
        };

        if (players[aiNo].hp <= 0) {
            alert("user win");


        } if (players[charNo].hp <= 0) {
            alert("user lost")
        } else {
            players[aiNo].hp -= players[charNo].attack;
            players[charNo].hp -= players[aiNo].attack;

            console.log(`User HP is ${players[charNo].hp} and attach is ${players[charNo].attack}`);
            console.log(players[aiNo].hp);

            ironHPDisplay.textContent = "HP: " + players[0].hp;
            blackHPDisplay.textContent = "HP: " + players[1].hp;
            draxHPDisplay.textContent = "HP: " + players[2].hp;
            animate();
        };

        function animate() {

            document.getElementById('animeEffect').style.opacity = 0.7;

            document.getElementById('attackStatus').innerHTML = `Your attack is ${players[charNo].attack} and AI's attack is ${players[aiNo].attack}`;

            setTimeout(timer, 1000);

            function timer() {
                document.getElementById('attackStatus').innerHTML = '';
                document.getElementById('animeEffect').style.opacity = 0;
            }

        };



    }

};

