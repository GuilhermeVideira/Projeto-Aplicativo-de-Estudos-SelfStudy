


 window.onload = () => {


   
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');


    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');


const audio_player = document.getElementById('music-player');

let current_song_index;
let next_song_index;

let songs = [
    {
        title: 'Calm-background',
        song_path:'img/musica/music1.mp3',
      
    },
    {
        title: 'Good-night',
        song_path: 'img/musica/music2.mp3',
        
    },
    {
        title: 'Leva-eternity',
        song_path: 'music/musica/music3.mp3',
       
    },
     {
        title: 'Once-in-paris',
        song_path: 'music/musica/music4.mp3',
       
    },
     {
        title: 'New-age-music',
        song_path: 'music/musica/music5.mp3',
       
    },
     {
        title: 'Lofi-chill',
        song_path: 'music/musica/music6.mp3',
       
    }

]

play_btn.addEventListener('click', TogglePlaySong);
next_btn.addEventListener('click', () => ChangeSong());
prev_btn.addEventListener('click', () => ChangeSong(false));


InitPlayer();

function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
}


function UpdatePlayer() {
    let song = songs[current_song_index];

   
    song_title_el.innerText = song.title;
    song_artist_el.innerText = song.artist;

    song_next_up_el.innerText = songs[next_song_index].title + " by " +  songs[next_song_index].artist;

    audio_player.src = song.song_path;
}

function TogglePlaySong() {
    if (audio_player.paused) {
        audio_player.play();
        play_btn_icon.classList.remove('bx bx-play bx-md');

        play_btn_icon.classList.add('bx bx-pause bx-md');
    } else {
        audio_player.pause();
        play_btn_icon.classList.add('bx bx-play bx-md');
        play_btn_icon.classList.remove('bx bx-pause bx-md');

    }
}

function ChangeSong (next = true ) {
    if (next) {
        current_song_index++;
        next_song_index = current_song_index +1;

        if (current_song_index > songs.length - 1) {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
        }

        if (next_song_index > songs.length - 1) {
            next_song_index = 0;
        }
    } else {
        current_song_index--;
        next_song_index = current_song_index + 1;

        if (current_song_index < 0) {
            current_song_index = songs.length - 1;
            next_song_index = 0;
        }

    }

    UpdatePlayer();
    TogglePlaySong();
}

}