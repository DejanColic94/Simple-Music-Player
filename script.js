

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
let songIndex = 3;

// init songs
loadSong(songs[songIndex]);





// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  };

  //play song
  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    // html audio tag has its own api
    // we are going to use that, just call .play() method
    audio.play();

  };
  //pause song
  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
  };

  // previous song
  function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        // loops if we are at the last song and go back
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
  };

  // next song
  function nextSong() {
    songIndex++;

    if(songIndex >songs.length - 1) {
        
        songIndex = 0
    };

    loadSong(songs[songIndex]);
    playSong();
  };

  // update pogress
  function updateProgress(e) {
      /* some of the audio methods
      console.log(e.srcElement.currentTime);
      console.log(e.srcElement.duration);
      */

      // deconstructing srcElement
      const {duration, currentTime} = e.srcElement;
      // geting the %
      const progressPercent = (currentTime / duration) * 100;
      // set the width of the progress bar to percentage
      progress.style.width = `${progressPercent}%`;

  };

  // set progress by clickong on the progress bar
  function setProgress(e) {
    // take total width
    const width = this.clientWidth;
    // x axis click
    const clickX = e.offsetX;
    // get total duration
    const duration = audio.duration;

    // set the current time
    audio.currentTime = (clickX / width) * duration;
  };

  //-------- EVENT LISTENERS ---------------------


  // play/pause button
  playBtn.addEventListener('click',function() {
      const isPlaying = musicContainer.classList.contains('play');

      if(isPlaying) {
          pauseSong();
      }else {
          playSong();
      }
  });

  // previous button
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);

  // progress bar
  // again, html audio tag provides api for us
  // makes things rly EZ
  audio.addEventListener('timeupdate', updateProgress);

  // skip song by clicking on the bar
  progressContainer.addEventListener('click', setProgress);

// after the song ends, move on to the next one
audio.addEventListener('ended', nextSong);

