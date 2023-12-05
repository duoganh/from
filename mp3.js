document.getElementById("submit").addEventListener("click", function () {
    console.log("Button clicked");
  
});

var sound = new Howl({
    src: ['./song/nhac.mp3'], // Use src instead of urls
    loop: true
});

function playMusic() {
    sound.play();
}
playMusic();
