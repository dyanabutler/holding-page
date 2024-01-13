const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const durationEl = document.getElementById('duration');
const currentTimeEl = document.getElementById('current-time');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const loopBtn = document.getElementById('loop');
const shuffleBtn = document.getElementById('shuffle');

const songs = [
    {
        name: 'hertzz',
        displayName: 'Press ',
        artist: 'hertz'
    },
  
];
//Check if playing
let isPlaying = false; 

//Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause-circle');
    playBtn.setAttribute('title', 'Pause')
    music.play();    
}

//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause-circle', 'fa-play');
    playBtn.setAttribute('title', 'Play')
    music.pause();    
}

//Event Listener for Play & Pause
playBtn.addEventListener('click', () => ( isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `./public/audios/${song.name}.mp3`;
    
}

// On Load, selects first song
let songIndex = 0;
loadSong(songs[songIndex]);






// Event Listener for Previous Song, Next Song, Progress Update
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
music.addEventListener('ended',  () => (onShuffle ? shuffleSong() : nextSong()));
progressContainer.addEventListener('click', setProgressBar);
loopBtn.addEventListener('click', loopSong);
shuffleBtn.addEventListener('click', shuffleUpdate);
function onFirstInteraction() {
    
    setTimeout(playSong(), 500);
    document.removeEventListener('mousemove', onFirstInteraction);
    document.removeEventListener('keydown', onFirstInteraction);
    document.removeEventListener('scroll', onFirstInteraction);
}

document.addEventListener('mousemove', onFirstInteraction);
document.addEventListener('keydown', onFirstInteraction);
document.addEventListener('scroll', onFirstInteraction)