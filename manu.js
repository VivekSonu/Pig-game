//declaring variables
var globalScore ;
var currentplayer , winningScore , playing;
var newscore ,flag = 0;
function call(){
    winningScore  = document.getElementById('input').value ;
   }

init();
//function of "roll" button

document.querySelector(".btn-roll").addEventListener("click" , function() {
    if(playing){
    var dice = Math.floor(Math.random() * 6 ) + 1;
    var outcome=document.querySelector(".dice")
    outcome.style.display = "block";
    outcome.src ="dice-" + dice + ".png";
    var dice2 = Math.floor(Math.random() * 6 ) + 1;
    var outcome2=document.querySelector(".dice2")
    outcome2.style.display = "block";
    outcome2.src ="dice-" + dice2 + ".png";
    if(dice !== 1 && dice2 !== 1)
    {   
         newscore = newscore + dice + dice2; 
        document.getElementById('current-' + currentplayer).innerHTML = newscore;
    }
    else{
        nextPlayer();
        }}

})
//function of "hold" button
document.querySelector('.btn-hold').addEventListener("click" , function(){
    if(playing){
       globalScore[currentplayer] += newscore ;
       document.getElementById('score-' + currentplayer).textContent = globalScore[currentplayer];
       if(globalScore[currentplayer] >= winningScore)
       {
           document.getElementById('name-' + currentplayer).innerHTML = "Winner!"
           document.querySelector(".dice").style.display = "none";
           document.querySelector(".dice2").style.display = "none";
           document.querySelector('.player-' + currentplayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + currentplayer + '-panel').classList.remove('active');
           playing = false ;
       }
        else 
        {
       nextPlayer();
        } 
    }})
//passing control to other player
function nextPlayer(){
    currentplayer === 0 ? currentplayer = 1 : currentplayer = 0;
    newscore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active')  ;
    document.querySelector('.player-1-panel').classList.toggle('active')  ;
    
}
//function of "new game" button
document.querySelector('.btn-new').addEventListener('click' , init );
//initialising 
function init(){
 globalScore = [0,0]
 currentplayer = 0;
 newscore = 0;
 playing = true;
 document.getElementById('score-0').innerHTML = "0";
 document.getElementById('score-1').innerHTML = "0";
 document.getElementById('current-0').innerHTML = "0";
 document.getElementById('current-1').innerHTML = "0";
 document.querySelector(".dice2").style.display = "none";
 document.querySelector(".dice").style.display = "none";
 document.getElementById('name-1').innerHTML = 'player2';
 document.getElementById('name-0').innerHTML = 'player1';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
}
