const orangeBox = document.querySelector('.orange-box');
let xPos = 10;
let yPos = 10;
let xSpeed = 4;
let ySpeed = 4;

function updateBoxPosition() {
  orangeBox.style.left = xPos + 'px';
  orangeBox.style.top = yPos + 'px';
}

function animate() {
  if (xPos + orangeBox.clientWidth >= window.innerWidth || xPos <= 0) {
    xSpeed = -xSpeed;
  }
  if (yPos + orangeBox.clientHeight >= window.innerHeight || yPos <= 0) {
    ySpeed = -ySpeed;
  }
  xPos += xSpeed;
  yPos += ySpeed;
  updateBoxPosition();
  requestAnimationFrame(animate);
}

animate();
