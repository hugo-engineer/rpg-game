
var ironDisplay = document.getElementById("iron");
var blackDisplay = document.getElementById("black");
var ironHPDisplay = document.getElementById("ironHP");
var blackHPDisplay = document.getElementById("blackHP");
var draxDisplay = document.getElementById("drax");
var draxHPDisplay = document.getElementById("draxHP");

var row1Display = document.getElementById("row1");
var row2Display = document.getElementById("row2");
var row3Display = document.getElementById("row3");

var aiSelected;
var selectedUser;
var userSelected;
var charNo;
var aiNo;

// player object
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

// Main function
function userChoice(userChar) {

    if (userSelected == undefined) {

        userSelected = userChar;

        switch (userSelected) {
            case 'iron': charNo = 0;
                break;
            case 'black': charNo = 1;
                break;
            case 'drax': charNo = 2;
        };

        switch (userSelected) {
            case 'iron': row2Display.appendChild(ironDisplay);
                break;
            case 'black': row2Display.appendChild(blackDisplay);
                break;
            case 'drax': row2Display.appendChild(draxDisplay);
        };

        console.log(userSelected);

        document.getElementById('row1').style.display = "none";
        document.getElementById('attackButton').style.display = "block";

        aiChoice()

    } else { alert("You have already picked a character.") }

};

function aiChoice() {

    if (userSelected !== undefined) {

        var aiRandom = Math.round(Math.random() * ((players.length - 1) - 0));

        while (aiRandom == charNo) {
            aiRandom = Math.round(Math.random() * ((players.length - 1) - 0));
        };
        aiSelected = players[aiRandom].key;
        console.log(aiSelected);

        switch (aiSelected) {
            case 'iron': row3Display.appendChild(ironDisplay);
                break;
            case 'black': row3Display.appendChild(blackDisplay);
                break;
            case 'drax': row3Display.appendChild(draxDisplay);
        };
    };
};

function gameOn() {
    if (userSelected !== undefined && aiSelected !== undefined) {

        switch (aiSelected) {
            case 'iron': aiNo = 0;
                break;
            case 'black': aiNo = 1;
                break;
            case 'drax': aiNo = 2;
        };

        if (players[aiNo].hp <= 0) {
            alert(`You have won against ${players[aiNo].name}`);


        } if (players[charNo].hp <= 0) {
            alert(`You have lost against ${players[aiNo].name}`);
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

            setTimeout(timer, 1500);

            function timer() {
                document.getElementById('attackStatus').innerHTML = '';
                document.getElementById('animeEffect').style.opacity = 0;
            }

        };



    }

};

