const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
let image = new Image();

document.getElementById('imageInput').addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    image.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

image.onload = function() {
  drawMeme();
};

function drawMeme() {
  // Ajustar canvas al tamaño de la imagen
  canvas.width = image.width;
  canvas.height = image.height;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0);

  const topText = document.getElementById('topText').value.toUpperCase();
  const bottomText = document.getElementById('bottomText').value.toUpperCase();

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;
  ctx.textAlign = 'center';
  ctx.font = `${canvas.width / 10}px Impact`;

  // Texto arriba
  ctx.fillText(topText, canvas.width / 2, canvas.height * 0.1);
  ctx.strokeText(topText, canvas.width / 2, canvas.height * 0.1);

  // Texto abajo
  ctx.fillText(bottomText, canvas.width / 2, canvas.height * 0.95);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height * 0.95);
}

function generateMeme() {
  if (image.src) {
    drawMeme();
  } else {
    alert('Primero selecciona una imagen.');
  }
}

function downloadMeme() {
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

