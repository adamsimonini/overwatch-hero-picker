function saveTeam(){
    var company = document.getElementById('company').value;
    var baseURL = window.location.href.split('?');
    var newTeam = baseURL[0] + '?' + company.trim().replace(/ /g, "_") + "+";
    for(i=0;i<team.length;i++){
      newTeam += ("+" + team[i].getAttribute("hero"));
    }
    document.getElementById('share').setAttribute('data-clipboard-text', newTeam);
    new ClipboardJS('.btn');
    document.getElementById('copied').style.display = "unset";
    document.getElementById('copied').scrollIntoView();
}
