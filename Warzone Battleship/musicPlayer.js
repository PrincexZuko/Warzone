document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bgAudio');
    var toggleButton = document.getElementById('toggleButton');
  
    // Function to toggle audio playback
    function toggleAudio() {
      if (audio.paused) {
        audio.play();
        toggleButton.innerHTML = '🔊'; 
      } else {
        audio.pause();
        toggleButton.innerHTML = '🔇'; 
      }
    }
  
    // Event listener for button click
    toggleButton.addEventListener('click', toggleAudio);
  
    // Reset audio on page load
    audio.currentTime = 0;
  
    // Autoplay audio on page load
    audio.play();
  });
  