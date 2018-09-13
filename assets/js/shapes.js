function rectangle(x, y, size, color) {
  brush.fillStyle = color;
  brush.fillRect(x, y, size, size);
}

function circle(x, y, size, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(x, y, size / 1.7, 0, 2 * Math.PI);
  brush.fill();
}

function triangle(x, y, size, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.moveTo(x, y - size / 2);
  brush.lineTo(x - size / 2, y + size / 2);
  brush.lineTo(x + size / 2, y + size / 2);
  brush.fill();
}
