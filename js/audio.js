document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audio-player');
  const playPauseBtn = document.getElementById('play-pause-btn');

  // Inicia o áudio automaticamente ao carregar a página
  audioPlayer.play();
  playPauseBtn.classList.add('playing');

  // Alterna entre play e pause ao clicar no botão
  playPauseBtn.addEventListener('click', function() {
      if (audioPlayer.paused) {
          audioPlayer.play();
          playPauseBtn.classList.add('playing');
          playPauseBtn.innerHTML = '&#10074;&#10074;'; // Muda para símbolo de Pause
      } else {
          audioPlayer.pause();
          playPauseBtn.classList.remove('playing');
          playPauseBtn.innerHTML = '&#9654;'; // Muda para símbolo de Play
      }
  });
});
