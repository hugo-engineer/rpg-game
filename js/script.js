    //Questions - how to move image using vailla js?
    //What is the cl issues?



var ironDisplay = document.getElementById("iron");
var blackDisplay = document.getElementById("black");
var ironHPDisplay = document.getElementById("ironHP");
var blackHPDisplay = document.getElementById("blackHP");

var ironDefaultHP = 300;
var blackDefaultHP = 300;

var selectedAI;
var selectedUser;




// function ironClick () {
//     console.log('iron');

//     document.getElementById('row1').appendChild(
//         document.getElementById('row2')
//       );

    
// }

function ironAttack() {
    
    ironHPDisplay.textContent = "HP: " + ironDefaultHP; 

    var ironRandomAttack = Math.floor(Math.random() * (35 - 10));
    console.log("attack is " + ironRandomAttack);
 
  blackClick(ironRandomAttack)

};

function blackClick(damage)  {
    console.log("Damage received " + damage);  
    blackDefaultHP -= damage;
    blackHPDisplay.textContent = "HP: " + blackDefaultHP; 
    
    var blackRandomAttack = Math.floor(Math.random() * (50 - 1));
    ironDefaultHP -= blackRandomAttack;

}





// function blackClick() {
         
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 200) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         black.style.top = pos + 'px'; 
//         black.style.right = pos + 'px'; 
//       };
//     };
//   };