document.addEventListener('DOMContentLoaded', () => {
  const currentTimeElement = document.getElementById('currentTime');

  function updateCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = `Current Time: ${currentTime}`;
  }

  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
});
