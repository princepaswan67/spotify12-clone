console.log('Lets write JavaScript');
console.log("hello");

let currentSong = new Audio();

const playMusic = (track) => {
    currentSong.src = "songs/" + track;
    currentSong.play().then(() => {
        console.log("Playing:", track);
        play.src = "pause.svg";
        document.querySelector(".songinfo").innerHTML = track;
        document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
    }).catch((err) => {
        console.error("Playback error:", err);
    });
};

async function main() {
    // Hardcoded song list
    let songs = [
        "song1.mp3",
        "song2.mp3",
        "song3.mp3"
    ];

    // Show songs in playlist
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML += `<li> 
            <img src="music.svg" alt="">
            <div class="info">
                <div>${song.replaceAll("%20", " ")}</div>
                <div>Song Artist</div>
            </div>
            <div class="playnow">
                <span>Play Now</span>
                <img class="" src="play.svg" alt="">
            </div>
        </li>`;
    }

    // Add click listeners to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", () => {
            let trackName = e.querySelector(".info").firstElementChild.innerHTML.trim();
            playMusic(trackName);
        });
    });

    // Play/pause button
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        } else {
            currentSong.pause();
            play.src = "play.svg";
        }
    });

    // Update progress bar
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });
}

main();