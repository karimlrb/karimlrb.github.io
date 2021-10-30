const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    // Ne pas oublier de soustraire la position du canvas
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove(e) {
  // On a besoin de s'avoir où est la souris donc mousePos
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  //   Stroke sert à faire la ligne
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = "6";
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePos = getMousePos(e);
  // La tu commences à dessiner quelque chose
  ctx.beginPath();
  //   On doit donner une valeur de x et une valeur de Y
  //   Attention x n'est pas connu, c'est mousePos.x qui est connu
  //   On ne dessine pas encore donc il se passe rien
  ctx.moveTo(mousePos.x, mousePos.y);

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
