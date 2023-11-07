function toggleSongs() {
    var secondHalfElement = document.getElementById('songs-second-half');
    secondHalfElement.classList.toggle('hidden');
  }
  document.getElementById("toggle-button").onclick = toggleSongs;