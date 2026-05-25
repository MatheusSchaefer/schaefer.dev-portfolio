const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "01";
const fontSize = 16;
const colunas = canvas.width / fontSize;

const gotas = [];

for (let i = 0; i < colunas; i++) {
  gotas[i] = 1;
}

function desenharMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

const colors = [
    "rgba(0,255,102,0.5)",
    "rgba(0,255,255,0.5)",
    "rgba(255,0,255,0.5)",
    "rgba(0,153,255,0.5)"
];

ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < gotas.length; i++) {
    const texto = letras.charAt(Math.floor(Math.random() * letras.length));

    ctx.fillText(texto, i * fontSize, gotas[i] * fontSize);

    if (gotas[i] * fontSize > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }

    gotas[i]++;
  }
}

setInterval(desenharMatrix, 50);