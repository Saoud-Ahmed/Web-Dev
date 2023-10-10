const ball = document.getElementById('ball');

ball.addEventListener('click', () => {
  ball.style.animation = 'bounce 2s infinite, colorChange 5s infinite, scale 2s alternate infinite';
});
