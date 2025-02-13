const lyrics = [
    { text: "¿Que fue lo que senti en nuestro primer beso?", time: 1 },
    { text: "con palabras seria imposible de explicar.....", time: 6 },
    { text: "asi que te dedico esta musica de una forma.....", time: 11 },
    { text: "algo peculiar... te amo mi niña....", time: 16 },
    { text: "Beso", time: 21 },
    { text: "Tan simple como eso", time: 24 },
    { text: "Tan simple como un beso", time: 28 },
    { text: "Todo puede cambiar", time: 32 },
    { text: "Beso", time: 37 },
    { text: "Tan simple como eso", time: 40 },
    { text: "Tan simple como un beso", time: 43 },
    { text: "Todo puede arreglar", time: 47 },
    { text: "Bésame", time: 52 },
    { text: "Junta tus labios con los míos otra vez", time: 55 },
    { text: "Que quiero amarte y decirte lo que sé", time: 62 },
    { text: "Pero no encuentro las palabras, bésame", time: 68 },
    { text: "Bésame", time: 76 },
    { text: "Junta tus labios con los míos otra vez", time: 79 },
    { text: "Que para enamorarte como lo hice ayer", time: 85 },
    { text: "Hay que empezar por acercarse, bésame", time: 91 },
    { text: "Ese primer beso fue la mejor sensacion de la vida", time: 98 },
    { text: "simplemente me hundi en ti", time: 104 },
    { text: "Beso", time: 111 },
    { text: "Fragmento de universo", time: 114 },
    { text: "Ritual frente a lo adverso", time: 118 },
    { text: "Capricho natural", time: 122 },
    { text: "Beso", time: 127 },
    { text: "Lenguaje tan diverso", time: 129 },
    { text: "Camino sin regreso", time: 133 },
    { text: "Elixir inmortal", time: 137 },
    { text: "Bésame", time: 142 },
    { text: "Junta tus labios con los míos otra vez", time: 145 },
    { text: "Que quiero amarte y decirte lo que sé", time: 151 },
    { text: "Pero no encuentro las palabras, bésame", time: 157 },
    { text: "Bésame", time: 166 },
    { text: "Junta tus labios con los míos otra vez", time: 169 },
    { text: "Que para enamorarte como lo hice ayer", time: 175 },
    { text: "Hay que empezar por acercarse, bésame", time: 180 },
    { text: "Bésame", time: 196 }
];

function startSong() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('song').play();

    let currentIndex = 0;
    function showLyrics() {
        if (currentIndex < lyrics.length) {
            const line1 = document.getElementById('line1');
            const line2 = document.getElementById('line2');

            line1.innerHTML = line2.innerHTML;
            line1.style.opacity = 1; 

            line2.innerHTML = lyrics[currentIndex].text;
            line2.style.opacity = 1;

            setTimeout(() => {
                line1.style.opacity = 0;
            }, 4000);

            currentIndex++;
            if (currentIndex < lyrics.length) {
                setTimeout(showLyrics, (lyrics[currentIndex].time - lyrics[currentIndex - 1].time) * 1000);
            }
        }
    }

    setTimeout(showLyrics, lyrics[0].time * 1000);
}



document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${3 + Math.random() * 3}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500); 
});
