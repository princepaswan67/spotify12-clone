console.log('Lets write JavaScript');
console.log("hello");

let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

async function main() {
    // Use the predefined array
    // let songs = await getSongs()  <-- remove this

    // song list you define manually
    let songs = ["song1.mp3", "song2.mp3"]; // update this list with your actual filenames

    let songUL = document.querySelector(".songlist ul");
    for (const song of songs) {
        songUL.innerHTML += `
            <li>
                <img src="music.svg" alt="">
                <div class="info">
                    <div>${song.replaceAll("%20", " ")}</div>
                    <div>Song Artist</div>
                </div>
                <div class="playnow">
                    <span>Play Now</span>
                    <img src="play.svg" alt="">
                </div>
            </li>
        `;
    }

    Array.from(songUL.getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", () => {
            let track = e.querySelector(".info").firstElementChild.innerHTML.trim();
            playMusic(track);
        });
    });

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        } else {
            currentSong.pause();
            play.src = "play.svg";
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });
}

main();