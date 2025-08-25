let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/IMG_3426.jpg',
        name : 'Ogbe Ni Awiri',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Ogbe Ni Awiri (La Kpa).mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Awo, Awo Nii Menba',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Awo, Awo Nii Menba -GCBS 802.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Asaa Ye',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Nimei Nba Naamei Nba (Asaa Ye).mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Osee Ye!',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Osee Ye! (Ga) -GBS 44.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Kosee Duade',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Kosee Duade.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Adzanote Dzi Man',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Adzanote Dzi Man (La Kpa) -GBS 1147.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : ' Awole, Awoni',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/ Awole, Awoni (Ga) - GBS 1069'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Awo-Awo Niime Nba',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Awo-Awo Niime Nba.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Nkeke Nmaanye',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Nkeke Nmaanye (La Kpa) -GBS 1147.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Awo, Awo Nii Menba',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Awo, Awo Nii Menba -GCBS 802.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Ayiwaa',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Ayiwaa - GCBS 2371.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Abosua',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Abosua.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Yaatse Ndzole Ohami',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Yaatse Ndzole Ohami -GBS 99.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Opense',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Opense.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Hiewiemo Bi',
        artist : 'La Youngsters Choir',
        music : 'Hiewiemo Bi.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Anaanu Man Woyaa',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Anaanu Man Woyaa.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Minya',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Minya.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Adene',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Adene.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Ee Mi Ni Oya',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Ee Mi Ni Oya.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Tsotsoobi',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Tsotsoobi.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Sune',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Sune.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'The Lord Will Provide',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/The Lord Will Provide.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Nye Baa Woewea',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Nye Baa Woewea.mp3'
    },
    {
        img : 'images/IMG_3426.jpg',
        name : 'Awo, Awo Nii Menba',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/One More River.mp3'
    },
    {
      img : 'images/IMG_3426.jpg',
        name : 'Hiewiemo Bi',
        artist : 'La Youngsters Choir',
        music : 'LYC_music/Hiewiemo Bi (Ga).mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}