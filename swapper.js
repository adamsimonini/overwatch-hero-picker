
var playerNumber = 0;

function selectHero(hero){
    team[playerNumber].setAttribute("hero", hero);
}

function selectedPlayer(player){
    playerNumber = player;
    for(i=0;i<players.length;i++){
        players[i].classList.remove('selected');
    }
    document.getElementById(player).classList.add('selected');
}