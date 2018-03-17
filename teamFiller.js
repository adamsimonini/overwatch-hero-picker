function teamFiller(url){
    if(url.indexOf('++') >= 0){
        var split = url.split('++');
        var companyName = split[0].slice(split[0].indexOf("?") + 1);
        document.getElementById('company').value = companyName;
        var teamArray = split[1].split('+');
        for(i=0;i<team.length;i++){
            team[i].setAttribute("hero", teamArray[i]);
        }
    }else{
        return false;
    }
}