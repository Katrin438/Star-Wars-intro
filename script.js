//stars generator
const stars = 300

if (window.location.href.match('http://127.0.0.1:5500/starwars.html') != null) {
    var audio = new Audio("m.mp3");
    audio.play();
}

for (let i = 0; i < stars; i++) {
    let star = document.createElement('div')
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}
function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)

    return [randomX, randomY]
}
function redirect() {
    window.location.href = "starwars.html";  
}
function sredirect(){
    window.location.href = "index.html";  

}

