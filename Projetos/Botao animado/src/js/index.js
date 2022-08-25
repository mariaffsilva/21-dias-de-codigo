// Pegar ID do reprodutor de audio e de vídeo
var audio = document.getElementById('audio-musica')
var video = document.getElementById('video-background')

// Pegar ID do botão de play
var playBtn = document.getElementById('btn-play')

// Pegar ID do botão de pause
var pauseBtn = document.getElementById('btn-pause')

// Reproduzir audio e vídeo e mostrar botão de pause
var playShow = function () {
  audio.play()
  video.play()
  playBtn.style.display = 'none'
  pauseBtn.style.display = 'inline-block'
}

// Pausar audio e vídeo e mostrar botão de play
var pauseShow = function () {
  audio.pause()
  video.pause()
  playBtn.style.display = 'inline-block'
  pauseBtn.style.display = 'none'
}
