const canvas = document.getElementById('springCanvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  velocity: 0,
  acceleration: 0.1,
};

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#e74c3c';
  ctx.fill();
  ctx.stroke();
}

function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update ball position and velocity
  ball.velocity += ball.acceleration;
  ball.y += ball.velocity;

  // Bounce off the top
  if (ball.y - ball.radius < 0) {
    ball.y = ball.radius;
    ball.velocity *= -1; // Reverse the velocity for a bounce
  }

  // Draw the ball
  drawBall();

  // Request the next animation frame
  requestAnimationFrame(update);
}

// Start the animation
update();