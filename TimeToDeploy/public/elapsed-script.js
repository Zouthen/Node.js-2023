document.addEventListener('DOMContentLoaded', () => {
  const eventDateElement = document.getElementById('eventDate');
  const elapsedTimeElement = document.getElementById('elapsedTime');
  const remainingForm = document.getElementById('remainingForm');
  const targetDateInput = document.getElementById('targetDate');
  const remainingTimeElement = document.getElementById('remainingTime');

  const eventDate = new Date('1997-06-03');
  eventDateElement.textContent = `Michael's birth: ${eventDate.toLocaleString()}`;

  function calculateTimeElapsed() {
    const currentDate = new Date();

    const timeElapsed = currentDate - eventDate;

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    elapsedTimeElement.textContent = `Time elapsed: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  calculateTimeElapsed();

  // Update the time elapsed every second
  setInterval(calculateTimeElapsed, 1000);

  function calculateTimeRemaining() {
    const targetDate = new Date(targetDateInput.value);
    const currentDate = new Date();

    if (isNaN(targetDate)) {
      remainingTimeElement.textContent = 'Invalid target date';
      return;
    }

    const timeRemaining = targetDate - currentDate;

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    remainingTimeElement.textContent = `Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  remainingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateTimeRemaining();
  });
});
