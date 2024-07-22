function createCard(title,channel,views,old){
    document.querySelector(".title").innerHTML=title;
    document.querySelector(".channel").innerHTML=channel;
    document.querySelector(".views").innerHTML=views;
    document.querySelector(".old").innerHTML=old;
}
createCard("Sigma Web Development Course - Web Development Tutorials","Code with Harry","25k","3month");