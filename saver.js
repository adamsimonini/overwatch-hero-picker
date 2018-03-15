function saveTeam(){
    var company = document.getElementById('company').value;
    var newTeam = window.location.href + '?' + company;
    for(i=0;i<team.length;i++){
      newTeam += ("&" + team[i].getAttribute("hero"));
    }
    console.log(newTeam);
    return newTeam;
}