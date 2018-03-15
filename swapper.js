var playerNumber = 0;

function selectHero(hero){
    team[playerNumber].setAttribute("hero", hero);
}

function selectedPlayer(player, position){
    playerNumber = player;
    var playerDom = document.getElementById(player);
    for(i=0;i<players.length;i++){
        players[i].classList.remove('selected');
    }
    document.getElementById(player).classList.add('selected');
    var allPositions = document.getElementsByClassName('position');
    document.getElementById('jobTitle').innerHTML = allPositions[player].innerHTML;
}
