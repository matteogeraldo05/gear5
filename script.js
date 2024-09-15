const gear5Audio = new Audio("audio/background.wav"); 

function playGearFiveAnimation() {
    const gear5 = document.getElementById("gear5");
    gear5.style.animationPlayState = "running";
}

function playSunGodAnimation() {
    gear5Audio.play();

    const sunGod = document.getElementById("sunGod");
    sunGod.style.animationPlayState = "running";
}

function playFadeInAnimation() {
    console.log("FadeIn animation triggered");
    const boing1 = document.getElementById("boing1");
    const boing2 = document.getElementById("boing2");
    const boing3 = document.getElementById("boing3");
    const boing4 = document.getElementById("boing4");
    boing1.style.animationPlayState = "running";
    boing2.style.animationPlayState = "running";
    boing3.style.animationPlayState = "running";
    boing4.style.animationPlayState = "running";
}

document.addEventListener("click", () => {
    playSunGodAnimation();
    playFadeInAnimation();
    playGearFiveAnimation();
});
