

// querys for easier DOM manipulation
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// song titles in an array
// should match song names in folder
const songs = ['butterfly', 'fukaiMori', 'haruYoKoi', 'hitohiraNoHanabira'];

// keep track of the songs, iterator
let songIndex = 0;

// init songs
loadSong(songs[songIndex]);


// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

